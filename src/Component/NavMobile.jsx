import React from "react";

function NavMobile() {
  return (
    <div className="lg:hidden">
      <button
        className="navbar-burger flex items-center text-blue-600 p-3"
        onClick={() => setShow((prev) => !prev)}
      >
        <svg
          className="block h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile Nav</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
      {show && (
        <div className="fixed top-[60px] h-screen left-0 bg-secondary md:w-[60%] w-full">
          <ul>
            <li className="mb-1">
              <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                Pricing
              </div>
            </li>
            <li className="mb-1">
              <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                Categories
              </div>
            </li>
            <li class="mb-1">
              <Link
                to="/checkout"
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                Cart
              </Link>
            </li>
            <li className="mb-1">
              <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                Contact
              </div>
            </li>
          </ul>
          <div className="mt-auto">
            <div className="pt-6 px-4">
              <Link
                to="/login"
                className="block px-4 py-3 mb-3 button text-center px-4"
              >
                {user ? (
                  <div onClick={handleAuthentication}>Sign Out</div>
                ) : (
                  <Link to="/login">Sign In</Link>
                )}
              </Link>
              {!user && (
                <Link
                  to="/login"
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                >
                  With Google
                </Link>
              )}
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>🚀🚀🚀</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
