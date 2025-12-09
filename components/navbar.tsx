const menuLinks = [
  'Home',
  'Products',
  'Resources',
  'Pricing',
];

function Navbar() {
  return (
    <nav className="bg-primary py-[18px] px-20">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-10">
          {/* logo */}
          <div className="flex flex-row">
            <img
              className="object-contain"
              src="./logo.png"
              alt="logo"
            />
            <p className="flex items-center justify-center text-white text-md font-bold m-2.5">
              WPH
            </p>
          </div>
          {/* menu link */}
          <div className="hidden md:flex justify-center items-center">
            <ul className="flex flex-row gap-8 my-1">
              {
                menuLinks.map(menu => (
                  <li
                    key={menu}
                    className="text-white text-md font-semibold"
                  >{menu}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 text-white text-md font-semibold">
          {/* buttons */}
          <button className="py-2.5 px-[18px] block md:hidden">
            <img
              src="./burger.png"
              alt="burger menu"
            />
          </button>
          <div className="hidden md:flex gap-3">
            <button className="py-2.5 px-[18px]">
              Log In
            </button>
            <button className="bg-secondary rounded-md py-2.5 px-[18px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;