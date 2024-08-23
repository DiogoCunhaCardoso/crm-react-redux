import { Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  const menuGroups = [
    {
      title: "My Work",
      items: [{ name: "Dashboard", icon: <FaHome />, link: "/" }],
    },
    {
      title: "Accounts",
      items: [{ name: "Customers", icon: <FaUser />, link: "/customers" }],
    },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="fixed top-0 left-0 z-40 w-64 h-full bg-[#F1F5F9] p-6 flex flex-col gap-10">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-sm text-[#31E1E1E] font-medium mb-4">
              {group.title}
            </h3>
            <ul className="font-medium">
              {group.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={`flex items-center p-3 rounded-lg text-sm hover:bg-white transition-all ${
                      location.pathname === item.link
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-900 hover:bg-gray-100"
                    } group`}
                  >
                    <div className="flex items-center justify-center">
                      <span className="flex items-center text-gray-900 transition duration-75 group-hover:text-gray-900">
                        {item.icon}
                      </span>
                      <span className="ms-3 flex-1">{item.name}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <div className="flex-1 ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
}
