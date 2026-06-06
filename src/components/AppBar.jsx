import { Link } from "react-router";
import { House } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Tv } from "lucide-react";
import { Search } from "lucide-react";
import { LogIn } from "lucide-react";

const AppBar = () => {
  return (
    <nav className="w-full bg-neon-bg-main/80  border-b border-zinc-800 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="font-heading text-2xl font-bold text-transparent bg-clip-text
                              bg-linear-to-r from-neon-cyan to-neon-fuchsia tracking-wider"
            >
              NovaStream
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-neon-text-primary hover:text-neon-cyan transition-colors px-3 py-2 rounded-md font-medium"
              >
                <House />
              </Link>
              <Link
                to="/movies"
                className="text-neon-text-secondary hover:text-neon-cyan transition-colors px-3 py-2 rounded-md font-medium"
              >
                <Clapperboard />
              </Link>
              <Link
                to="/tvshows"
                className="text-neon-text-secondary hover:text-neon-cyan transition-colors px-3 py-2 font-medium"
              >
                <Tv />
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              to="/search"
              className="text-neon-text-secondary hover:text-neon-cyan transition-colors px-3 py-2 rounded-md font-medium"
            >
              <Search />
            </Link>
            <Link
              to="/login"
              className="text-neon-text-secondary hover:text-neon-cyan transition-colors px-3 py-2 rounded-md font-medium"
            >
              <LogIn />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AppBar;
