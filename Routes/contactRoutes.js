const express = require("express");
const router = express.Router();
const { getContact, createContact } = require("../controllers/contactController")

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").put();

router.route("/:id").delete();

router.route("/:id").get();


module.exports = router;