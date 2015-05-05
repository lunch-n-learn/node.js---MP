Pre-requisites:
---------------

1. Install node
2. Open Node.js command prompt, then Install web application framework called express globally (-g option), not specific to your project <br><i>
npm install –g express-generator</i>
3. Install Nodemon, Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
<br><i>npm install –g nodemon</i>
4. Clone this repository on your local machine.

Once this repository has been cloned,
---------------------------------------

1. cd node.js---MP && npm install
2. Add the following line (as the first line) in onListening()  function in bin/www file.
<br><i>console.log('Listening on port ' + server.address().port); </i>
3. Start the server with command:
  <br><i>nodemon bin/www</i>
4.	Open <i>http://localhost:3000</i> in browser. 
5.	To stop the server, use command Cntrl + C

