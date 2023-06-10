const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all Contacts
//@route GET /api/contact
//@access public
const getContact = asyncHandler( async(req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new Contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async(req, res) => {
  await console.log("The Request boby is:", req.body);
  const {name, lastname, phone} = req.boby;
  if(!name || !lastname || !phone) {
    await res.status(400);
    throw new Error("Fields are empty");
  };
   const contact = await Contact.create({
    name, email, phone,
   });
  await res.status(201).json(contact);
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