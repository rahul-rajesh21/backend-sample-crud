const express = require('express');
const router = express.Router();
const {loginUser} = require("../controllers/users.controller")


router.post('/',loginUser);


module.exports = router;
