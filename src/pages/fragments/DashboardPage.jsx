import Breadcrumb from "../../components/breadcrumb";
import StatsCard from "../../components/statsCard";

const statsData = [
  {
    title: "Monthly Revenue",
    value: "40978 €",
    percentage: "37%",
  },
  {
    title: "Total Clients",
    value: "27",
    percentage: "1+",
  },
  {
    title: "Something else",
    value: "0000",
    percentage: "-10%",
  },
];

const messages = [
  {
    senderName: "Alice",
    message: "Hey, can you send me the report by tomorrow?",
    time: "09:15",
  },
  {
    senderName: "Charlie",
    message: "Can we reschedule the meeting?",
    time: "13:30",
  },
  {
    senderName: "David",
    message: "I've updated the project plan, please review.",
    time: "15:00",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <Breadcrumb />
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

      <div className="mt-12 bg-[#F1F5F9] p-2.5 rounded-md mb-4">
        <p className="py-1 px-2 bg-white rounded-sm w-fit text-sm font-medium">
          Last Messages
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 border-b border-gray-200 ${
              index === messages.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{msg.senderName}</p>
              <p className="text-gray-600 text-sm">{msg.time}</p>
            </div>
            <p className="mt-0.5 text-gray-800 truncate">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
