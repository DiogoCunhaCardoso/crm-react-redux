import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../../components/breadcrumb";
import { selectCustomerByName } from "../../state/slices/customerSlice";
import StatsCard from "../../components/statsCard";
import IdentificationComponent from "../fragments/accounts/IdentificationComponent";
import SalesComponent from "../fragments/accounts/SalesComponent/Container";
import ContactsComponent from "../fragments/accounts/ContactsComponent/Container";
import ConstructionsComponent from "../fragments/accounts/ConstructionsComponent/Container";
import { FaFolder } from "react-icons/fa";

const menuItems = [
  { title: "Identification", component: IdentificationComponent },
  { title: "Sales", component: SalesComponent },
  { title: "Contacts", component: ContactsComponent },
  { title: "Constructions", component: ConstructionsComponent },
];

const statsData = [
  {
    title: "Annual Budget",
    value: "120040 €",
  },
  {
    title: "Total Sales",
    value: "789099 €",
  },
];

export default function CustomerDetailPage() {
  const location = useLocation();
  const { companyName } = location.state || {};

  const customerDetails = useSelector((state) =>
    selectCustomerByName(state, companyName)
  );

  const [activeMenu, setActiveMenu] = useState("Identification");
  const [profileImage, setProfileImage] = useState(
    customerDetails?.identification?.profileImage || "https://placehold.co/120"
  );

  if (!customerDetails) return <div className="p-4">Customer not found</div>;

  // Get the active component
  const ActiveComponent = menuItems.find(
    (item) => item.title === activeMenu
  ).component;

  const sectionKey = activeMenu.toLowerCase();
  const activeSection = customerDetails[sectionKey];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // You can dispatch an action here to update the profile image in Redux if needed
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <Breadcrumb />

      <div className="flex justify-between my-10 max-w-[calc(100vw-256px-70px)] relative">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              className="rounded-full aspect-square object-cover border bg-gray-200"
              src={profileImage}
              width={120}
              alt="profile pic"
            />
            <label
              htmlFor="profileImageInput"
              className="absolute bottom-0 right-0 p-2 bg-gray-900 text-white shadow-md rounded-full cursor-pointer"
            >
              <FaFolder size={16} />
              <input
                type="file"
                id="profileImageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <span>
            <p className="text-xl font-semibold">
              {customerDetails.identification?.companyName}
            </p>
            <p className="text-[#737475]">
              {customerDetails.identification?.ownerName}
            </p>
          </span>
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          {statsData.map((item, index) => (
            <StatsCard
              key={index}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 bg-[#F1F5F9] p-2.5 rounded-md mb-4">
        {menuItems.map((item, i) => (
          <p
            key={i}
            onClick={() => setActiveMenu(item.title)}
            className={`py-1 px-2 rounded-sm w-fit text-sm font-medium cursor-pointer ${
              activeMenu === item.title
                ? "bg-white text-gray-900"
                : "hover:bg-gray-200"
            }`}
          >
            {item.title}
          </p>
        ))}
      </div>

      {ActiveComponent && (
        <ActiveComponent
          customerDetails={activeSection}
          companyName={companyName}
        />
      )}
    </div>
  );
}
