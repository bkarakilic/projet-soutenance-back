class AuthController {
    login(req, res) {
      res.status(201).json({message: "Successfully Registered"});
    }
} 

module.exports = new AuthController();