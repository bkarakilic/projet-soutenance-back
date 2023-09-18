const database = require('../../../../utils/Database');


class congesController {
   async getConges (req,res) {
      try {
         const email = req.user.email;
   
         const conges = await database.Conges.findAll({ where: { email_user: email }});

   
         if (conges && conges.length > 0) {
           res.status(200).send(conges);
         } else {
           res.status(404).send({ message: "Aucun congé trouvé pour cet utilisateur." });
         }
   
       } catch (error) {
         console.error(error);
         res.status(500).send({ error: "Une erreur s'est produite lors de la récupération des données." });
       }
   }
} 

module.exports = new congesController();