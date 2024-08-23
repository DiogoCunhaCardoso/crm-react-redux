import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";
import { updateCustomer } from "../../../state/slices/customerSlice";

export default function IdentificationComponent({ customerDetails }) {
  const dispatch = useDispatch();
  const [editingField, setEditingField] = useState(null);
  const [currentValue, setCurrentValue] = useState("");

  // Set currentValue when editingField or customerDetails change
  useEffect(() => {
    if (editingField) {
      setCurrentValue(customerDetails[editingField] || "");
    }
  }, [editingField, customerDetails]);

  const handleEditClick = (key, value) => {
    setEditingField(key);
    setCurrentValue(value);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const handleSaveClick = () => {
    if (editingField) {
      dispatch(
        updateCustomer({
          companyName: customerDetails.companyName,
          updates: { [editingField]: currentValue },
        })
      );
      setEditingField(null);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <ul className="divide-y divide-gray-200">
        {Object.entries(customerDetails).map(([key, value], i) => (
          <li key={i} className="p-4 flex justify-between items-center">
            <span className="font-medium text-gray-700">{key}:</span>
            {editingField === key ? (
              <span className="flex items-center gap-2">
                <input
                  type="text"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                />
                <button onClick={handleSaveClick}>
                  <FaCheck className="text-green-600" />
                </button>
                <button onClick={handleCancelClick}>
                  <FaTimes className="text-red-600" />
                </button>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="text-gray-600">{value}</span>
                <button onClick={() => handleEditClick(key, value)}>
                  <FaPen className="text-gray-600" size={12} />
                </button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
