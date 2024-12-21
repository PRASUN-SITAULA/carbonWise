import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDashboard } from "../../utils/DashboardDataProvider";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  // const navigate = useNavigate();
  // const dashboard = useDashboard();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleDashboard = () => {
  //   // dashboard.fetchData();
  //   navigate("/dashboard");
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-teal-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 text-transparent bg-clip-text">
                EcoTrack
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/home"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-600">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-teal-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/home"
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
