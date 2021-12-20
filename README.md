# 🚀 Episource Client (ECOMMY)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Screenshot (18)](https://user-images.githubusercontent.com/63959831/146801014-1105226e-b924-4170-8d62-0f879a22938e.png)


### `DockerFile`

```sh
FROM node:lts

WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
RUN npm run build
COPY . .

CMD ["npm", "start"]
```
### 💻 `API Used`

https://reqres.in/
<br />
ReqRes is a bare-bones ExpressJS application.

[Docs & Demos ⇒](http://reqres.in)

#### Installation

* Clone repo
* Make sure Node.js is installed on your machine
* `npm install`
* `node app.js` or use [Nodemon](https://github.com/remy/nodemon)


## 💻 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
