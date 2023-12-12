

const Navbar = () => {

    const navItems = <> 
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Me</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-sky-600 bg-opacity-70">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-2xl font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Golam Faruk</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" text-2xl font-bold menu menu-horizontal px-1 text-white">
    {navItems}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;