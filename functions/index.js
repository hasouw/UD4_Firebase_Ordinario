const functions = require('firebase-functions');


const admin = require('firebase-admin');

admin.initializeApp();

exports.addMessage = functions.https.onRequest((req, res) => {
  const Nombre = req.query.var1;
  const Correo = req.query.var2;
  const Password = req.query.var3;
  const Edad = req.query.var4;
  const Ciudad = req.query.var5;
  return admin.database().ref('/examen-ordinario-ud4-firebase.firebaseio.com/Perfil').push({Nombre: Nombre, Correo: Correo, Password: Password, Edad: Edad, Ciudad: IdCiudad}).then((snapshot) => {
    
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    
        return res.redirect(303, snapshot.ref.toString());
    
      });

});