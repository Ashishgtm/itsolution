// imports
const express = require('express')
const app = express()
const port = 5000

var servicesRouter = require('./routes/services.js');
var aboutRouter = require('./routes/about.js');
var contactRouter = require('./routes/contact.js');
var membershipRouter = require('./routes/membership.js');

//static files
app.use(express.static('public'))
app.use('/stylesheet',express.static(__dirname + 'public/stylesheet'))
app.use('/javascript',express.static(__dirname + 'public/javascript'))
app.use('/images',express.static(__dirname + 'public/images'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('',(req, res) => {
    res.render('index')
   })
   app.use('/services',servicesRouter);
   app.use('/about',aboutRouter);
   app.use('/contact',contactRouter);
   app.use('/membership',membershipRouter);
   
   //listen on port 5000
   app.listen(port, () => console.info('Ready To Proceed'))