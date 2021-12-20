import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrUpdateUser } from "../../api/auth";
import axios from "axios";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const intended = history.location.state;

    if (intended) {
      return;
    } else {
      if (user && user.token) {
        history.push("/");
      }
    }
  }, [history, user]);

  const roleBasedRedirect = (res) => {
    const intended = history.location.state;

    if (intended) {
      history.push(intended.from);
    } else {
      history.push(`/`);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  // const loginUser = async () => {
  //   return await axios.post(
  //     `${process.env.REACT_APP_BACKEND_API}/login`,
  //     function(req, res){
  //       console.log(req.body);
  //     },
      
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(e);
      axios.post(`https://reqres.in/api/login`, {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
        var token1 = response.data.token;
        console.log(token1)  ;  
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            token: token1,
          },
        });
        roleBasedRedirect(token1);
      })
    
      
      .catch((err) => console.log(err));
  } catch (error) {
    toast.error(error.message);
    console.log(error);
    setLoading(false);
  }

  };

  const handleGoogleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
                token: idTokenResult.token,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };


  const loginForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePassword}
            autoFocus
            placeholder="Your Password"
          />
        </div>
        <br />

        <Button
          onClick={handleSubmit}
          type="primary"
          className="mb-3"
          block
          shape="round"
          icon={<MailOutlined />}
          size="large"
          disabled={!email || password.length < 6}
        >
          Login with Email/Password
        </Button>
        <Link to="/forgot/password" className="float-right">
          Forgot password
        </Link>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? <h4>Loading...</h4> : <h4>Login</h4>}

          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
