import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState(false);

    const handleBtn = () => {
        setMenu(!menu);
    };

    return (
        <header className="fixed w-full text-xl flex justify-between items-center py-3 px-4 bg-white/80 backdrop-blur-md shadow-md">
            <p className="font-semibold">
                <i className="bi bi-snow2 mr-3 text-sky-500 text-3xl align-middle"></i>
                AC Company
            </p>

            <button
                onClick={handleBtn}
                className={`cursor-pointer p-1 rounded-md transition-colors 
                ${menu
                        ? "text-red-500 hover:bg-rose-100"
                        : "text-sky-700 hover:bg-sky-100"
                    }`}
            >
                {menu
                    ? (<i className="bi bi-x-circle text-3xl"></i>)
                    : (<i className="bi bi-list text-3xl"></i>)}
            </button>

            {/* Drop menu (solo visible cuando menu es true) */}
            {menu && (
                <nav className="absolute top-full left-0 flex flex-col w-full bg-sky-50 text-sky-700 shadow-md">
                    <button className="cursor-pointer transition-colors hover:bg-sky-100 flex px-10 py-2">
                        <i className="mr-5 bi bi-clipboard-check"></i>Appointment
                    </button>
                    <button className="cursor-pointer transition-colors hover:bg-sky-100 flex px-10 py-2">
                        <i className="mr-5 bi bi-info-circle"></i>About Us
                    </button>
                    <button className="cursor-pointer transition-colors hover:bg-sky-100 flex px-10 py-2">
                        <i className="mr-5 bi bi-nut"></i>Services
                    </button>
                    <button className="cursor-pointer transition-colors hover:bg-sky-100 flex px-10 py-2">
                        <i className="mr-5 bi bi-person-lines-fill"></i>Contact
                    </button>
                </nav>
            )}
        </header>
    );
}
