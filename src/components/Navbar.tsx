import Link from "next/link";

// Define types for props
interface NavItem {
  href: string;
  label: string;
}

interface NavbarProps {
  logo: React.ReactNode;
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4 mt-10 font-sans">
      {" "}
      {/* font-sans yahan add kiya */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-white/10 backdrop-blur-lg rounded-xl px-6 border border-white/20">
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Icon */}
          <div className="flex items-center justify-center h-10 w-10 bg-white/80 rounded-full cursor-pointer group hover:bg-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
