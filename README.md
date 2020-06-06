If going to use electron in react do this: 
eg:
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

# Structure

## Procfile
Used when developing
Runs both the electron app and react dev server simultaneously

## src/electronWait.js
Used when running in development
This is the called after running npm start and waits for the webpack server to be up and running then starts the electron app

## src/eletron.js
The root file for the electron app
If ran in dev condidtions will load html from the webpack local server and if else then provides the build files


# Commands
## npm run {NAME}

## dev
For development
Calls nf start which will execute the commands in the Procfile
Allows the react dev server and electron app sto be set up in one command

## start
Runs the development react server

## build
Turns the react source code to html and other files for use 

## package-(mac/win/linux)
Builds the project for production
Must run "npm run build" before 

## electron
Run the electron app