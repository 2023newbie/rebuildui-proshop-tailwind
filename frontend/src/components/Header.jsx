import { useEffect, useState } from 'react'
import { FaBars, FaShoppingCart, FaUser, FaCaretDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isShow, setIsShow] = useState(false)
  const [showNavUser, setShowNavUser] = useState(false)
  const [showNavAdmin, setShowNavAdmin] = useState(false)
  const isLogin = false

  const buttonNavUserHandler = e => {
    e.stopPropagation()
    if (showNavAdmin) {
      setShowNavAdmin(false)
    }
    setShowNavUser(prev => !prev)
  }

  const buttonNavAdminHandler = e => {
    e.stopPropagation()
    if (showNavUser) {
      setShowNavUser(false)
    }
    setShowNavAdmin(prev => !prev)
  }

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 768) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }

    const mouseDownHandler = () => {
      if (showNavUser) {
        setShowNavUser(false)
      }
      if (showNavAdmin) {
        setShowNavAdmin(false)
      }
    }

    window.addEventListener('load', resizeHandler)
    window.addEventListener('resize', resizeHandler)
    window.addEventListener('click', mouseDownHandler)

    return () => {
      window.removeEventListener('load', resizeHandler)
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener('click', mouseDownHandler)
    }
  }, [showNavAdmin, showNavUser])

  return (
    <nav className=" bg-slate-700">
      <div className="container mx-auto py-4 px-4 md:px-0 lg:px-16 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* left side */}
        <div className="flex flex-row justify-between">
          <Link className="flex items-center" to="/">
            <img src="./logo.png" alt="logo" />
            <span className="text-xl text-slate-50">ProShop</span>
          </Link>
          <button
            className="text-2xl md:hidden border border-slate-500 rounded px-4 focus:outline focus:outline-slate-400 duration-200"
            onClick={() => setIsShow(prev => !prev)}
          >
            <FaBars style={{ color: '#fff' }} />
          </button>
        </div>

        {/* right side */}
        {isShow && (
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <div className="flex gap-2">
              <input
                className="rounded p-2 placeholder:text-sm flex-1 md:flex-none"
                type="text"
                placeholder="Search products by name"
              />
              <button className="text-slate-300 p-2 border border-slate-300 rounded hover:bg-slate-300 hover:border-slate-300 hover:text-slate-800 duration-200">
                Search
              </button>
            </div>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-1 text-slate-400 ${
                  isActive && 'text-slate-50'
                }`
              }
            >
              <FaShoppingCart />
              Cart
            </NavLink>

            {isLogin || <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-1 text-slate-400 ${
                  isActive && 'text-slate-50'
                }`
              }
            >
              <FaUser />
              Sign In
            </NavLink>}

            {isLogin && (
              <>
                <div className="relative md:self-center">
                  <button
                    className="flex items-center text-slate-400"
                    onClick={buttonNavUserHandler}
                  >
                    Ducky <FaCaretDown />
                  </button>
                  <ul
                    className={`md:absolute w-full md:w-32 mt-2 bg-slate-50 py-2 border border-slate-700 rounded-lg right-0 top-8 ${
                      showNavUser ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <NavLink
                        to="/profile"
                        className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="relative md:self-center">
                  <button
                    className="flex items-center text-slate-400"
                    onClick={buttonNavAdminHandler}
                  >
                    Admin <FaCaretDown />
                  </button>
                  <ul
                    className={`md:absolute w-full md:w-32 mt-2 bg-slate-50 py-2 border border-slate-700 rounded-lg right-0 top-8 ${
                      showNavAdmin ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <NavLink
                        to="/admin/products"
                        className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/admin/users"
                        className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
                      >
                        Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/admin/orders"
                        className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
                      >
                        Orders
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
