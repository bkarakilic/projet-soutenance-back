const database = require('../../../utils/Database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



class UsersController {
   async getProfil(req, res) {
      const email = req.user.email;
      const user = await database.User.findOne({ where: { email } });

      res.status(200).json({
         nom: user.nom,
         prenom: user.prenom,
         email: user.email,
         login: user.login,
         civilite: user.civilite,
         codePostal: user.codePostal,
         ville: user.ville,
         adresse: user.adresse,
      });
   }

   async updateProfil(req, res) {
      const {nom, prenom , mdp, civilite, ville, codePostal, adresse } = req.body;
      const user_email = req.user.email;

      try {
         let newToken = null;
         const currentUser = await database.User.findOne({
            where: {
               email: user_email,
            }
         });

         if (nom) {
            currentUser.nom = nom;
         }

         if (prenom) {
            currentUser.prenom = prenom;
         }

         if (civilite) {
            currentUser.civilite = civilite;
         }

         if (ville) {
            currentUser.ville = ville;
         }

         if (adresse) {
            currentUser.adresse = adresse;
         }

         if (codePostal ) {
            currentUser.codePostal = codePostal;
         }

         if (mdp !== undefined) {
            const saltRounds = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(mdp, saltRounds);
            currentUser.mdp = hashedPassword;
         }

         // if (email !== user_email) {
         
         //    const existingUser = await database.User.findOne({ where: { email } });

         //    if (existingUser) {
         //      return res.status(400).send({ message: "Email existant" });
         //    }

         //    newToken = jwt.sign({ email: email, roles: user.roles }, process.env.SECRET_KEY, { expiresIn: '1h' });
               
         //    currentUser.email = email; 
   
         //    console.log(currentUser.email);
         // }

         await currentUser.save();

         const responsePayload = { success: true, message: "Informations de l'utilisateur mis à jour" };

         // if (newToken) {
         //    responsePayload.newToken = newToken;
         // }
         
         return res.status(200).send(responsePayload);

      } catch (error) {
         return res.status(500).send(error.message)
      }
   }
} 

module.exports = new UsersController();