import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar(){

    const {theme,toggleTheme}=useContext(ThemeContext);

    return(

      <nav className="flex justify-between items-center p-5 shadow bg-white text-black dark:bg-gray-900 dark:text-white">

            <h2 className="text-2xl font-bold">
                Agency
            </h2>

            <div className="flex gap-5">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/projects">Projects</Link>

                <Link to="/services">Services</Link>

                <Link to="/contact">Contact</Link>

            </div>

            <button
            onClick={toggleTheme}
            className="border px-4 py-2 rounded">

                {theme==="light"?"🌙":"☀"}

            </button>

        </nav>

    );

}

export default Navbar;