const database = require('../../../utils/Database');


class ndfController {
  async getNdf (req,res) {
    try {
        const email = req.user.email;

        console.log('ok');

        const ndfs = await database.Ndf.findAll({
          where: { user_email: email },
          order: [['createdAt', 'DESC']]
      });


        if (conges && conges.length > 0) {
          res.status(200).send(ndfs);
        } else {
          res.status(404).send({ message: "Aucune Note(s) de frais trouvé pour cet utilisateur." });
        }

      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Une erreur s'est produite lors de la récupération des données." });
      }
  }

  // async addConges (req,res) {
  //   try {
  //     const email = req.user.email;
  //     const { type_conges, date_debut, date_fin, raison, nbConges } = req.body;


  //     const newConges = await database.Conges.create({
  //       email_user: email,
  //       type_conges,
  //       date_debut,
  //       date_fin,
  //       raison,
  //       nbConges,
  //       status: 'en attente'
  //   });

  //   res.status(201).send({success: true, message: 'Demande de congé envoyé'});
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: "Impossible de faire une demande de congé, réssayer plus tard" });
  //   }
  // }
}

module.exports = new ndfController();