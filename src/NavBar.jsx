import Logo from "./public/assets/raz-logo-blk.png"
import { Link } from "react-router-dom";
import RazLandingPage from './RazLandingPage';
import React, { useState, createContext, useContext } from "react";
import { Sun, Moon} from 'lucide-react';

const calLink = "https://calendly.com/sarwerraz"; // <- replaced


export default function NavBar(){
    const ThemeContext = createContext();
    const [darkMode, setDarkMode] = useState(false);
    function ThemeToggle() {
      const { darkMode, setDarkMode } = useContext(ThemeContext);
      return (
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </button>
      );
    }
    return(
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
              <div className={darkMode ? "dark" : ""}>
                <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">

                        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition">
                            <img onClick={RazLandingPage} src={Logo} alt="Raz logo-blk" className="w-12 h-12 rounded-md shadow-sm">
                            </img>
                            <div>
                                <h1 className="text-xl font-semibold">Fractional AI Technical PM</h1>
                                <p className="text-sm text-gray-500">Ship AI projects faster. Less chaos. More impact.</p>
                            </div>
                        </Link>
                    </div>
                              <ThemeToggle />

                    <nav className="flex items-center gap-4">
                      <Link to="/services" className="text-sm hover:underline">Services</Link>
                      <a href="/process" className="text-sm hover:underline">How I work</a>
                      <a href="/proof" className="text-sm hover:underline">Proof</a>
                      <a href={calLink} className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">Book a call</a>
                    </nav>
                </header>
              </div>

        </ThemeContext.Provider>
    )
};