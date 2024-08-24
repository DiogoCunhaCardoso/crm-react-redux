import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCustomer } from "../../state/slices/customerSlice";

export default function CustomersPage() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    identification: {
      companyName: "",
      ownerName: "",
      taxId: "",
      commercialName: "",
      phoneNumber: "",
      clientNo: "",
      mobilePhoneNumber: "",
      lead: "",
      emailMkt: "",
      address: "",
      emailComercial: "",
      postalCode: "",
      transportationZone: "",
      local: "",
      channel: "",
      district: "",
      website: "",
      territory: "",
      instagram: "",
      regionNut: "",
      linkedin: "",
    },
    sales: {
      payments: {
        paymentTerm: "",
        requiredCredit: "",
        approvedCredit: "",
      },
      discounts: [
        { channel: "Canal", discount: "" },
        { channel: "Obra", discount: "" },
      ],
    },
    contacts: [],
    construction: [],
  });

  const [error, setError] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.identification.companyName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleAddCustomer = () => {
    if (newCustomer.identification.companyName.trim() === "") {
      setError("Company name is required.");
      return;
    }

    const exists = customers.some(
      (customer) =>
        customer.identification.companyName.toLowerCase() ===
        newCustomer.identification.companyName.toLowerCase()
    );

    if (exists) {
      setError("Company name already exists.");
    } else {
      setError("");
      dispatch(addCustomer(newCustomer));
      setNewCustomer({
        identification: {
          companyName: "",
          ownerName: "",
        },
        sales: {
          payments: {},
          discounts: [],
        },
        contacts: [],
        construction: [],
      });
      setModalOpen(false);
    }
  };

  return (
    <div className="flex-1 p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <Breadcrumb />

      <div className="flex items-center mb-4 ">
        {/*  S E A R C H _ I N P U T */}
        <input
          type="search"
          placeholder="Search"
          className="border p-2 rounded-md w-full focus:outline-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* A D D _ C U S T O M E R _ B T N */}
        <button
          onClick={() => setModalOpen(true)}
          className="ml-2 text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-md"
        >
          <FaPlus />
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg mt-4">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer, index) => (
            <Link
              key={index}
              to={`/customers/${customer.identification.companyName}`}
              state={{ companyName: customer.identification.companyName }}
            >
              <div
                className={`p-4 border-b border-gray-200 ${
                  index === filteredCustomers.length - 1 ? "border-b-0" : ""
                } hover:bg-[#F1F5F9]/50 transition duration-300 cursor-pointer`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold select-none">
                    {customer.identification.companyName}
                  </p>
                  <p className="text-gray-600 text-sm select-none">
                    {customer.identification.ownerName}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="p-4 text-gray-600">No matching customers found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1"
              onClick={() => setModalOpen(false)}
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
            <h2 className="text-lg font-semibold text-gray-900">
              Create Company
            </h2>
            <p className="text-[#64748B] text-sm mt-2">
              Create the basic fields for a company.
            </p>
            <div className="py-4">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    onChange={(e) =>
                      setNewCustomer({
                        ...newCustomer,
                        identification: {
                          ...newCustomer.identification,
                          companyName: e.target.value,
                        },
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Company Name"
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    value={newCustomer.identification.ownerName}
                    onChange={(e) =>
                      setNewCustomer({
                        ...newCustomer,
                        identification: {
                          ...newCustomer.identification,
                          ownerName: e.target.value,
                        },
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Owner Name"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddCustomer}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Add Customer
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
