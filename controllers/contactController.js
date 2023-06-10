const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all Contacts
//@route GET /api/contact
//@access public
const getContact = asyncHandler((req, res) => {
  res.status(200).json({message:"Show all Contacts"});
});

//@desc Create new Contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler((req, res) => {
  console.log("The Request boby is:", req.body);
  const {name, lastname, phone} = req.boby;
  if(!name || !lastname || !phone) {
    res.status(400);
    throw new Error("Fields are empty");
  };
  res.status(201).json({message:"Create Contact"});
});

//@desc Update  new Contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler((req, res) => {
  res.status(200).json({message:`Update Contact ${req.params.id}`});
});

//@desc Delete Contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({message:`Delete Contact ${req.params.id}`});
});

//@desc Show Contact
//@route GET /api/contact/:id
//@access public
const showContact = asyncHandler((req, res) => {
  res.status(200).json({message:`Show Contact ${req.params.id}`});
});

module.exports = { getContact, createContact, updateContact, deleteContact, showContact };