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
1. git clone git@github.com:BanaBatshon/Chatty-App.git 
2. cd into `Chatty-App/`
3. Install the dependencies: `npm install`
4. start the server by running `npm start`
5. open another terminal window
6. cd into `Chatty-App/chatty_server/`
7. start the web socket server by running `npm start`
8. open http://localhost:3000 on two or more different tabs to be able to chat between two or more users

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* Express 4.16.4
* uuid 3.3.2
* ws 6.2.1