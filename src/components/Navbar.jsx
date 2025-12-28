function Navbar(){
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        
            <ul className="flex gap-6 text-gray-600">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">Projects</li>
              <li className="cursor-pointer hover:text-black">Contact</li>  
            </ul>
        </nav>
    );
}

export default Navbar;