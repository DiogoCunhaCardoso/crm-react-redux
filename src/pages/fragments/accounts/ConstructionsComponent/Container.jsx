import ConstructionsPresentation from "./Presentation";
import { useDispatch } from "react-redux";
import /*   updateConstruction,
  deleteConstruction, */
"../../../../state/slices/customerSlice";

const ConstructionsContainer = ({ customerDetails, companyName }) => {
  const dispatch = useDispatch();

  /*   const handleEdit = (id) => {
    dispatch(updateConstruction({ companyName, constructionId: id }));
  };

  const handleDelete = (id) => {
    dispatch(deleteConstruction({ companyName, constructionId: id }));
  }; */

  return (
    <div className="p-4">
      <ConstructionsPresentation
        constructions={customerDetails}
        /*   onEdit={handleEdit}
        onDelete={handleDelete} */
      />
    </div>
  );
};

export default ConstructionsContainer;
