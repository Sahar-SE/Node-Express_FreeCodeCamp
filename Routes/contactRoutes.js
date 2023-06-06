const express = require("express");
const router = express.Router();
const { getContact, createContact } = require("../controllers/contactController")

router.route("/").get(getContact);

router.route("/:id").get();

router.route("/").post(createContact);

router.route("/:id").put((req, res) => {
    res.status(200).json({"message":`Update Contact ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({"message":`Delete Contact ${req.params.id}`});
});


module.exports = router;