import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCustomer } from "../../../state/slices/customerSlice";
import InfoRow from "../../../components/InfoRow";

export default function IdentificationComponent({ customerDetails }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (key, value) => {
    // Dispatch the updateCustomer action
    dispatch(
      updateCustomer({
        companyName: customerDetails.companyName,
        updatedCustomer: { [key]: value },
      })
    );

    if (key === "companyName") {
      navigate(`/customers/`);
    }
  };

  const handleCancel = () => {};

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <ul className="divide-y divide-gray-200">
        {Object.entries(customerDetails).map(([key, value], i) => (
          <InfoRow
            key={i}
            label={key}
            value={value}
            onSave={handleSave}
            onCancel={handleCancel}
            editKey={key}
          />
        ))}
      </ul>
    </div>
  );
}
