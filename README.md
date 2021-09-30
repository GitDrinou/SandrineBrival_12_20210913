# Openclassrooms - Project #12

This repo GitHub contains all the source code to run the profil'page with the sports analytics dashboard SportSee.

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Dependencies installation

Execute this command to install all dependencies of this project
### `npm install `


## Lauching the project

### 1. Open the project on your IDE (here we use VSCode)

- Fork the repository
- Clone it on your computer
- install dependencies if necessary

### 2. Run API Server

- clone the following repo GitHub on your computer : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
- Return to the project SportSee on the IDE, and open a new terminal
- Change the directory and replace it by the name of the API repo folder (Ex : P9-front-end-dashboard)
- Execute the followin npm command : `npm start `
- The API server is launched normally on ths address : [http://localhost:3000](http://localhost:3000)

Do not close this terminal tab otherwise the link between the API and React apps will not work.

### 3. Run the React project
- Open a new terminal ( project folder )
- Execute the following npm command : `npm start `
- A message appear : "Something is already running on port 3000. Would you like to run the app on another port instead?". Tape "Y" to launch the React app on a new port (Ex : 3001)

After doing these steps, normally the React app is launched on your default browser at this address : [http://localhost:3001](http://localhost:3001)


## Launching JSDOC Documentation HTML page

If you don't have it, install the LiveServer VSCode extension.
Otherwise, follow theses steps : 
- open 'docs' folder on your project's file tree
- open the 'index.html' file
- two ways to launch the page on your browser : 
    1 / do a right click and select 'Open with Live Server'
    2/ click on 'Go Live' visible on the IDE's task bar to run the live server and click on 'docs' link in the index page (live server)

    
