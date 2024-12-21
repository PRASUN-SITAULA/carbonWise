import { Leaf, BarChart3, Globe2, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { QuoteSection } from "../components/Landing/Quote";
import { Footer } from "../components/Landing/Footer";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      {/* Header */}
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
                <a
                  href="#features"
                  className="text-gray-700 hover:text-teal-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block text-teal-600">
                  Environmental Impact
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Join thousands of conscious individuals and businesses in
                measuring, understanding, and reducing their carbon footprint
                with AI-powered insights.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/home"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="#"
                  className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-100 transition"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80"
                alt="Sustainable Future"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <QuoteSection />
      <section id="features" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose EcoTrack?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Real-time Analytics
              </h3>
              <p className="text-gray-600">
                Track your carbon footprint in real-time with detailed insights
                and actionable recommendations.
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Globe2 className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Join a worldwide community committed to reducing environmental
                impact and creating sustainable change.
              </p>
            </div>
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Leaf className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Solutions</h3>
              <p className="text-gray-600">
                Get personalized recommendations powered by AI to optimize your
                sustainability efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
