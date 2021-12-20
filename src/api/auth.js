import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `https://reqres.in/api/login`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/currentUser`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/currentAdmin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
