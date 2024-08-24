import { useState } from "react";
import InfoRow from "../../../../components/InfoRow";

const SalesPresentation = ({ sales = {}, onEdit }) => {
  const keys = Object.keys(sales);
  const [selectedKey, setSelectedKey] = useState(keys[0] || "");

  // Get the data for the selected key
  const selectedData = sales[selectedKey] || {}; // Ensure selectedData is always an object

  const handleSave = (key, value) => {
    // Handle save logic
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  console.log(selectedData);

  return (
    <>
      {/* S U B _ M E N U */}
      <div className="flex gap-4 p-2.5 rounded-md mb-4 capitalize">
        {keys.map((key) => (
          <p
            key={key}
            onClick={() => setSelectedKey(key)}
            className={`py-1 px-2 rounded-sm w-fit text-sm font-medium cursor-pointer ${
              selectedKey === key ? "bg-[#F1F5F9]" : "bg-white"
            }`}
          >
            {key}
          </p>
        ))}
      </div>

      {/* D I S P L A Y  _ D A T A  */}
      <div className="bg-white border border-gray-200 rounded-lg mt-4">
        {Array.isArray(selectedData) ? (
          selectedData.length > 0 ? (
            selectedData.map((item, index) => (
              <InfoRow
                key={index}
                label={item.channel}
                value={item.discount}
                onEdit={(editKey) => onEdit(editKey)}
                onSave={handleSave}
                onCancel={handleCancel}
                editKey={item.channel || index}
              />
            ))
          ) : (
            <p className="p-4 text-gray-600">
              No data available for {selectedKey}
            </p>
          )
        ) : (
          <div>
            <div className="flex flex-col">
              <InfoRow
                label="Payment Term"
                value={selectedData.paymentTerm}
                onEdit={onEdit}
                onSave={handleSave}
                onCancel={handleCancel}
                editKey="paymentTerm"
              />
              <InfoRow
                label="Required Credit"
                value={selectedData.requiredCredit}
                onEdit={onEdit}
                onSave={handleSave}
                onCancel={handleCancel}
                editKey="requiredCredit"
              />
              <InfoRow
                label="Approved Credit"
                value={selectedData.approvedCredit}
                onEdit={onEdit}
                onSave={handleSave}
                onCancel={handleCancel}
                editKey="approvedCredit"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SalesPresentation;
