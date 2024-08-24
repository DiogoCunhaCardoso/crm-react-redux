import InfoRow from "../../../../components/InfoRow";
import { useDispatch } from "react-redux";
import { updateConstruction } from "../../../../state/slices/customerSlice";

const ConstructionsPresentation = ({ constructions, onEdit }) => {
  const dispatch = useDispatch();
  const handleSave = (key, value) => {
    dispatch(
      updateConstruction({
        companyName: constructions.companyName,
        updatedConstruction: { [key]: value },
      })
    );
  };

  const handleCancel = () => {
    // Handle cancel logic
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-4">
      {constructions && constructions.length > 0 ? (
        constructions.map((construction, index) => (
          <InfoRow
            key={index}
            label={"Name"}
            value={construction.name}
            onEdit={() => onEdit(construction.name)}
            onSave={handleSave}
            onCancel={handleCancel}
            editKey={construction.name}
          />
        ))
      ) : (
        <p className="p-4 text-gray-600">No constructions available</p>
      )}
    </div>
  );
};

export default ConstructionsPresentation;
