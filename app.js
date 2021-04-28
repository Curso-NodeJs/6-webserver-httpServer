require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

// // Handlebars
// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials');



// Servir contenido estatico
app.use( express.static('public/angular-app') );
//app.use( express.static('public/react') );

// app.get('/',  (req, res) => {
//   res.render('home', {
//       nombre: 'Juan David Mendez',
//       titulo: 'Curso de Node'
//   })

// })


  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/angular-app/index.html')
  })
  
  // app.get('*',  (req, res) => {
  //   res.sendFile(__dirname + '/public/react/index.html')
  // })
 
app.listen(port, () => console.log(`La aplicación está corriendo en el puerto: ${ port }`))