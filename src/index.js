const express = require('express');
//const morgan = require('morgan)');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

//Middlewales
  //app.use(morgan('dev'));
  app.use(express.json());

//Routes
app.use('/notes',require('./routes/notes'));

//Static file
app.use(express.static(__dirname + '/public'));
//app.use(express.static())

//listenning on port
app.listen(app.get('port'), () => {
  console.log('server on port',app.get('port'));
});
