//@desc Get all Contacts
//@route GET /api/contact
//@access public
const getContact = (req, res) => {
  res.status(200).json({"message":"Show all Contacts"});
};

//@desc Create new Contact
//@route POST /api/contact
//@access public
const creatContact = (req, res) => {
  res.status(201).json({"message":"Create Contact"});
};

//@desc Update  new Contact
//@route PUT /api/contact
//@access public
const updateContact = (req, res) => {
  res.status(200).json({"message":`Update Contact ${req.params.id}`});
};

//@desc Delete Contact
//@route DELETE /api/contact
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({"message":`Delete Contact ${req.params.id}`});
};

//@desc Show Contact
//@route GET /api/contact
//@access public
const showContact = (req, res) => {
  res.status(200).json({"message":`Show Contact ${req.params.id}`});
};

module.exports = { getContact, creatContact, updateContact, deleteContact, showContact };