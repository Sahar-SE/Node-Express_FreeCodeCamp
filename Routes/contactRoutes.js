const express = require("express");
const router = express.Router();

router.route.get("/", (req, res) => {
    res.json({"message":"Get All Contacts!"});
})

module.exports = router;