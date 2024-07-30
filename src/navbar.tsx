import { Link } from "react-router-dom";
import pagesData from "./pages/pagesData";
import { routerType } from "./types/router.types";

const Navbar = () => {
  const pageRoutes = pagesData.map(({ path, title }: routerType) => {
    return (
      <div className="flex items-center">
        <Link to={path} className="text-white text-lg font-semibold">
          {title.toUpperCase()}
        </Link>
      </div>
    );
  });

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-around h-16">
          {pageRoutes}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
