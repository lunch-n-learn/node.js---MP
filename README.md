# node.js---MP
Pre-requisites:
1. Install node
2. Open Node.js command prompt, then Install web application framework called express globally (-g option), not specific to your project
npm install –g express-generator
3. Install Nodemon, Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
npm install –g nodemon
4. Clone this repository on your local machine.
   
 



Once this repository has been cloned,

1. cd node.js---MP && npm install
2. Add the following line (as the first line) in onListening()  function in bin/www file.
console.log('Listening on port ' + server.address().port); ( for some reason, debug does not work on windows)
3. Start the server with command:
  nodemon bin/www
4.	Open http://localhost:3000 in browser. 
5.	To stop the server, use command Cntrl + C

