const express = require("express");
const router = express.Router();

router.route('/', (req, res) => {
    res.json({"message":"Get All Contacts!"});
})