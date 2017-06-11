# Notes 

## Grunt task tunner

### Task 1 - js hint grunt module - to debug js errors

npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save-dev
npm install time-grunt --save-dev
npm install jit-grunt --save-dev

The JSHint task is set to examine all the JavaScript files in the app/scripts folder, and the Gruntfile.js and generate any reports of JS errors or warnings.

jshint-stylish - to print out the messages from JSHint in a better format.

time-grunt module keeps track of the time taken for each task for statistics

jit-grunt - loads the grunt modules as and when required. no need to manually load the modules

### Task 2 - copy and clean module 

* Grunt modules to copy over files to a distribution folder named dist, and clean up the dist folder when needed. 

npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-clean --save-dev

### Task 3 - concatenation, minification and uglification

npm install grunt-contrib-concat --save-dev
 npm install grunt-contrib-cssmin --save-dev
 npm install grunt-contrib-uglify --save-dev
 npm install grunt-filerev --save-dev
 npm install grunt-usemin --save-dev

 ### Task 4 - Watch, Connect and Serve Tasks

* To spin up a web server and keep a watch on the files and automatically reload the browser when any of the watched files are updated. 

npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-connect --save-dev

### Assignment tasks

* Task 1 - complete services.js file
* Task 2 - complete controllers.js
* Task 3 - about.html - media list under corporate leadership using the corporateFactory data
* Task 4 - home page - using the data from controller.js service and factory