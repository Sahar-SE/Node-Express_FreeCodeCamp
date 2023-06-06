const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({"message":"Get All Contacts!"});
});

router.route("/:id").get();

router.route("/").post((req, res) => {
    res.status(200).json({"message":"Create Contacts!"});
});

router.route("/:id").put((req, res) => {
    res.status(200).json({"message":`Update Contact ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({"message":`Delete Contact ${req.params.id}`});
});


module.exports = router;