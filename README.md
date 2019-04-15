React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Project Description

Who Said What is a project which mainly uses React and Web Sockets to create a communications app. The user can chat with others.
and can choose to display their name or chat anonymously. The user can also check how many users are logged in at any moment.

### Screenshots

!["Screenshot of nav bar"](https://github.com/BanaBatshon/Chatty-App/blob/master/Imgs/NavBar.png)
!["Screenshot of chat bar"](https://github.com/BanaBatshon/Chatty-App/blob/master/Imgs/ChatBar.png)
!["Screenshot of messages area"](https://github.com/BanaBatshon/Chatty-App/blob/master/Imgs/MsgsArea.png)

### Getting Started

Clone the boilerplate and create your own git repo.

1. git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
2. cd react-simple-boilerplate
3. git remote rm origin
4. git remote add origin [YOUR NEW REPOSITORY]
5. Manually update your package.json file


Install the dependencies and start the server.

1. npm install
2. npm start


start the websocket server in another terminal widnow.

1. npm start => listening on port 3001

Finally open http://localhost:3000 on two or more different tabs to be able to chat between two or more users


### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

1. npm run lint

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* Express 4.16.4
* uuid 3.3.2
* ws 6.2.1