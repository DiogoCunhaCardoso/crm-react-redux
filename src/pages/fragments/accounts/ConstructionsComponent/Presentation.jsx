const ConstructionsPresentation = ({ constructions, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
      <table className="w-full border-collapse divide-y divide-gray-200 min-w-[600px]">
        <thead>
          <tr className="bg-[#F1F5F9]">
            <th className="p-3 text-left font-medium text-sm">Name</th>
            <th className="p-3 text-left font-medium text-sm">Location</th>
            <th className="p-3 text-left font-medium text-sm">Status</th>
            <th className="p-3 text-right pr-20 font-medium text-sm ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {constructions.length > 0 ? (
            constructions.map((construction) => (
              <tr key={construction.id} className="hover:bg-gray-50">
                <td className="p-4 text-sm">{construction.name}</td>
                <td className="p-4 text-sm">{construction.location}</td>
                <td className="p-4 text-sm">{construction.status}</td>
                <td className="p-4 text-sm flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(construction.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(construction.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-gray-600 text-center">
                No constructions available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructionsPresentation;
