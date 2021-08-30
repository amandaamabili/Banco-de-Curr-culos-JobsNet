const express = require("express");
const {
    UserController,
} = require("../controllers/users/userController");

const router = express.Router();

router.post("/user", (req, res) => {
    const {user} = req.body
    return new UserController()
        .saveUser(user)
        .then(response => res.status(200).send(response))
        .catch(error => {
            console.debug(`Error:${error}`)
            res.status(401).send({message: error})
        })
})

module.exports = router;
