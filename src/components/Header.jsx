import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState(false);

    const handleBtn = () => setMenu(!menu);

    const handleNavigation = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };

    const navLinks = [
        { icon: "bi bi-clipboard-check", label: "Appointment", id: "book" },
        { icon: "bi bi-info-circle", label: "About Us", id: "about" },
        { icon: "bi bi-nut", label: "Services", id: "services" },
        { icon: "bi bi-person-lines-fill", label: "Contact", id: "contact" },
    ];

    return (
        <header className="z-50 fixed w-full bg-white shadow-md text-gray-700">
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                <p className="font-bold text-lg flex items-center">
                    <i className="bi bi-snow2 mr-2 text-sky-600 text-3xl"></i>AC Company</p>
                {/* Mobile Button */}
                <button
                    onClick={handleBtn}
                    className="sm:hidden p-2 rounded-md transition cursor-pointer hover:text-red-600"
                >
                    <i className={`bi ${menu ? "bi-x-lg text-red-600" : "bi-list text-sky-700"} text-2xl transition-colors duration-300`}></i>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden sm:flex space-x-8 font-medium">
                    {navLinks.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavigation(link.id)}
                            className="hover:text-sky-600 transition-colors cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Mobile Dropdown */}
            <nav
                className={`sm:hidden bg-sky-50 border-t border-sky-100 flex flex-col overflow-hidden transition-all duration-500 ${menu ? "max-h-80" : "max-h-0"
                    }`}
            >
                {navLinks.map((link, i) => (
                    <button
                        key={i}
                        onClick={() => handleNavigation(link.id)}
                        className="flex items-center px-6 py-3 text-sky-700 hover:bg-sky-100 transition"
                    >
                        <i className={`mr-3 ${link.icon}`}></i>
                        {link.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}
