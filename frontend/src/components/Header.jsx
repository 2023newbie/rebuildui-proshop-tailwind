/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ItemNav from './UI/ItemNav'
import NavUserInfo from './UI/NavUserInfo'

const Header = () => {
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 768) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }

    window.addEventListener('load', resizeHandler)
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('load', resizeHandler)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

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
            <ItemNav to="/cart"><FaShoppingCart /> Cart</ItemNav>
            <NavUserInfo />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
