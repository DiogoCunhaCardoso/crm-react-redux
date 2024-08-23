import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateContact,
  deleteContact,
} from "../../../../state/slices/customerSlice";
import ContactsPresentation from "./Presentation";

const ContactsComponent = ({ customerDetails, companyName }) => {
  const dispatch = useDispatch();
  const contacts = customerDetails ? customerDetails : [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleEdit = (contactName) => {
    const contact = contacts.find((c) => c.name === contactName);
    setEditingContact(contact);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (editingContact) {
      dispatch(updateContact({ companyName, updatedContact: editingContact }));
      setIsModalOpen(false);
      setEditingContact(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingContact(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (contactName) => {
    dispatch(deleteContact({ companyName, contactName }));
  };

  return (
    <>
      <ContactsPresentation
        contacts={contacts}
        isModalOpen={isModalOpen}
        onEdit={handleEdit}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
        onChange={handleChange}
        onDelete={handleDelete}
        editingContact={editingContact}
      />
    </>
  );
};

export default ContactsComponent;
