import SalesPresentation from "./Presentation";
import { useDispatch } from "react-redux";
/* import { updateSales } from "../../../../state/slices/customerSlice";
 */
const SalesContainer = ({ customerDetails, companyName }) => {
  const dispatch = useDispatch();
  console.log(customerDetails);

  const handleEdit = (id) => {
    dispatch({ companyName, constructionId: id });
  };

  return (
    <div>
      <SalesPresentation sales={customerDetails} onEdit={handleEdit} />
    </div>
  );
};

export default SalesContainer;
