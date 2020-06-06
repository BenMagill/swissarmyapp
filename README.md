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

## /build
Hold the current/most up to date html and other files the client uses

## /node_modules
No ones business

## /release-builds
The executable versions of the app

## /src/sections
Hold the different pages to the app.
If theres are multiple sections they are shown in sup folders of the section

## /src/components
Currently just the navbar
Things that are shared or have to other place to be
Will have output box in the future

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