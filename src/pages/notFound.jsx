import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-700 text-lg">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
