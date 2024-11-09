import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    const handleLogin = () => setIsLogged(!isLogged);

    return (
        <header className="bg-background flex text-textPrimary justify-between px-10 py-4 items-center shadow-md">
            <h1 className="font-bold text-lg">Portal Filmes</h1>
            <nav className="flex space-x-4">
                <NavLink to="/" className="hover:text-primary">Home</NavLink>
                <NavLink to="/genres" className="hover:text-primary">Gêneros</NavLink>
                <NavLink to="/contato" className="hover:text-primary">Contato</NavLink>
            </nav>
            <button 
                onClick={handleLogin} 
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
            >
               <Login isLogged={isLogged} handleLogin={handleLogin} />
            </button>
        </header>
    );
}
//<Login isLogged={isLogged} handleLogin={handleLogin} />//