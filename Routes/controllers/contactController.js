//@desc Get all Contacts
//@route GET /api/contact
//@access public
const getContact = (req, res) => {
    res.status(200).json({"message":`Show Contact ${req.params.id}`});
}