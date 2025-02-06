import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="mb-8">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link
            to="/"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              location.pathname === "/" 
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/counter"
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              location.pathname === "/counter"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            )}
          >
            Counter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;