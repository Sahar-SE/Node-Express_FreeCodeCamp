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
   name, lastname, phone,
  });
   res.status(201).json(contact);
});

//@desc Update  new Contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler( async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(res.params.id, req.body, {new: true});
  res.status(200).json(updateContact);
});

//@desc Delete Contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler( async(req, res) => {
  const contact = await Contact.findById(req.params.id);

  res.status(200).json({message:`Delete Contact ${req.params.id}`});
});

//@desc Show Contact
//@route GET /api/contact/:id
//@access public
const showContact = asyncHandler( async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

module.exports = { getContact, createContact, updateContact, deleteContact, showContact };