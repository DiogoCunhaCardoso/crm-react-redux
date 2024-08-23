import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/breadcrumb";
import { selectCustomerByName } from "../../state/slices/customerSlice";
import StatsCard from "../../components/statsCard";
import IdentificationComponent from "../fragments/accounts/IdentificationComponent";
import SalesComponent from "../fragments/accounts/SalesComponent";
import ContactsComponent from "../fragments/accounts/ContactsComponent/Container";
import ConstructionsComponent from "../fragments/accounts/ConstructionsComponent/Container";

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

  // REDUX
  const customerDetails = useSelector((state) =>
    selectCustomerByName(state, companyName)
  );

  const [activeMenu, setActiveMenu] = useState("Identification");

  if (!customerDetails) return <div className="p-4">Customer not found</div>;

  // Get the active component
  const ActiveComponent = menuItems.find(
    (item) => item.title === activeMenu
  ).component;

  const sectionKey = activeMenu.toLowerCase();
  const activeSection = customerDetails[sectionKey];

  return (
    <div className="flex-1 p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <Breadcrumb />

      <div className="flex justify-between my-10 max-w-[calc(100vw-256px-70px)]">
        <div className="flex items-center gap-5">
          <img
            className="rounded-full aspect-square object-cover"
            src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"
            width={120}
            alt="profile pic"
          />
          <span>
            <p className="text-xl font-semibold">
              {customerDetails.identification?.companyName}
            </p>
            <p className="text-[#737475]">
              {customerDetails.identification?.ownerName}
            </p>
          </span>
        </div>

        <div className="flex gap-4 flex-wrap">
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
