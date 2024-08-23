const ContactsPresentation = ({
  contacts,
  isModalOpen,
  onEdit,
  onDelete,
  onUpdate,
  onCancel,
  onChange,
  editingContact,
}) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
        <table className="w-full border-collapse divide-y divide-gray-200 min-w-[600px]">
          <thead>
            <tr className="bg-[#F1F5F9]">
              <th className="p-3 text-left font-medium text-sm">Name</th>
              <th className="p-3 text-left font-medium text-sm">Role</th>
              <th className="p-3 text-left font-medium text-sm">Email</th>
              <th className="p-3 text-left font-medium text-sm">
                Phone Number
              </th>
              <th className="p-3 text-left font-medium text-sm">
                Mobile Number
              </th>
              <th className="p-3 text-left font-medium text-sm">LinkedIn</th>
              <th className="p-3 text-left font-medium text-sm">Birthday</th>
              <th className="p-3 text-left font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.name} className="hover:bg-gray-50">
                  <td className="p-4 text-sm">{contact.name}</td>
                  <td className="p-4 text-sm">{contact.role}</td>
                  <td className="p-4 text-sm">{contact.email}</td>
                  <td className="p-4 text-sm">{contact.phoneNumber}</td>
                  <td className="p-4 text-sm">{contact.mobileNumber}</td>
                  <td className="p-4 text-sm">{contact.linkedin}</td>
                  <td className="p-4 text-sm">{contact.birthday}</td>
                  <td className="p-4 text-sm flex gap-2">
                    <button
                      onClick={() => onEdit(contact.name)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(contact.name)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-gray-600 text-center">
                  No contacts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Contact
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1"
                onClick={onCancel}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form className="space-y-4">
              {editingContact && (
                <>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={editingContact.role}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={editingContact.email}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={editingContact.phoneNumber}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      value={editingContact.mobileNumber}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-900"
                    >
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={editingContact.linkedin}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="birthday"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Birthday
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      value={editingContact.birthday}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={onUpdate}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={onCancel}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsPresentation;
