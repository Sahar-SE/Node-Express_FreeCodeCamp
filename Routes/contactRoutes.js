const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({"message":"Get All Contacts!"});
});

router.route("/").post((req, res) => {
    res.status(200).json({"message":"Get All Contacts!"});
});

router.route("/:id").put((req, res) => {
    res.status(200).json({"message":"Get All Contacts!"});
});

router.route("/").get((req, res) => {
    res.status(200).json({"message":"Get All Contacts!"});
});


module.exports = router;