const express = require("express");
const router = express.Router();
const ctrlFriends = require("../../controllers/friends/index");

router.get("/",  ctrlFriends.getAll);


module.exports = router;