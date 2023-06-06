const express = require("express");
const router = express.Router();
const { getContact, createContact, updateContact, deleteContact, showContact } = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

router.route("/:id").get(showContact);


module.exports = router;