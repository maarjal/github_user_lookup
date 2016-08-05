# Github User Lookup

#### A website where user can search for public repositories by GitHub username. August 5, 2016

#### By Maarja Laineste

## Description

This website uses Github API to display public repositories when searching by Github username. Search results include repository name and description.

## The project meets following objectives:

* Dependencies are managed with npm and Bower
* App includes gulp-based asset pipeline with a development server and Gulp development tasks
* Project includes 2 JavaScript files using 'exports'
* API key is stored in the variable 'exports.apiKey'

## Setup/Installation Requirements

* Clone this repository
* initialize and install Node and Bower by running the following commands:
  * $ npm install
  * $ bower install
* You need your own Github API key to run this project:
  * Visit the Settings area of your GitHub account
  * Select 'Personal Access Tokens' from the sidebar
  * Hit 'Generate New Token'.
* Place your token in an '.env' file at the top level of your directory, containing:
  * exports.apiKey = "YOUR_API_HERE";
* To run the project in your local server, run:
  * $ gulp build --production
  * $ gulp serve

## Support and contact details

Phone : 503 501 0870
Email : maarja.laineste@gmail.com

## Technologies Used

* HTML
* CSS
* Sass
* Bootstrap
* JavaScript
* jQuery
* Gulp
* Bower
* Node.js

### License

Copyright (c) 2016 **Maarja Laineste**
