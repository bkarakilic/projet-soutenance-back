const jwt = require('jsonwebtoken');
const database = require('../../../utils/Database');
const bcrypt = require('bcrypt');


class AuthController {
    async login(req, res) {
      const { login, password, comptable } = req.body;

      let user;
      try {
        if (comptable) {
          user = await database.User.findOne({
            where: {
              login: login,
              roles: 'comptable'
            }
          });
        } else {
          user = await database.User.findOne({
            where: {
              login: login,
              roles: 'employes'
            }
          });
        }

        if (!user) {
          return res.status(401).json({ success: false, message: 'Login ou mot de passe invalide' });
        }

        const validPassword = await bcrypt.compare(password, user.mdp);

        if (validPassword) {
          const token = jwt.sign({ email: user.email, roles: user.roles }, process.env.SECRET_KEY, { expiresIn: '1h' });
          return res.status(200).json({ success: true, token, username: user.login, roles: user.roles });
        } else {
          return res.status(400).json({ success: false, message: 'Mot de passe invalide' });
        }

      } catch (error) {
        return res.status(500).json({ success: false, message: 'Aucun utilisateur trouvé' });
      }
    }
} 

module.exports = new AuthController();