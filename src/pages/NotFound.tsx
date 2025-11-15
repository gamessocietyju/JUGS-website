import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-jugs-dark flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="text-center">
          <h1 className="text-8xl lg:text-9xl font-bold text-jugs-red mb-4">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-jugs-red text-white px-8 py-3 rounded-[17px] text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
