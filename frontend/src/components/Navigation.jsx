import { Button } from "@/components/ui/button";
import logoSvg from "@/assets/medical-shield.jpg";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-blue-700/20 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5">

        {/* Logo */}
        <div className="flex items-center gap-3"> <img src={logoSvg} alt="MediCore-AI Logo" className="rounded-full w-9 h-9 lg:w-11 lg:h-11" /> <span className="font-bold text-xl lg:text-2xl text-blue-800 tracking-tight"> MediCore-AI </span> </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm sm:text-base px-4 py-2 rounded-lg shadow-sm transition"
          >
            Menu
          </Button>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a
            href="#features"
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm lg:text-base"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm lg:text-base"
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm lg:text-base"
          >
            Contact
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-indigo-600 font-medium text-sm lg:text-base"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm lg:text-base px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
