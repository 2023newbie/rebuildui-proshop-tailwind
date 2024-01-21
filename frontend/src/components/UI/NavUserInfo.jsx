/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { FaUser, FaCaretDown } from 'react-icons/fa'
import ItemList from './ItemList'
import ItemNav from './ItemNav'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth-slice'
import { useNavigate } from 'react-router-dom'

const NavUserInfo = () => {
  const [showNavUser, setShowNavUser] = useState(false)
  const [showNavAdmin, setShowNavAdmin] = useState(false)
  const userInfo = useSelector(store => store.auth.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const logoutHandler = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

  useEffect(() => {
    const mouseDownHandler = () => {
      if (showNavUser) {
        setShowNavUser(false)
      }
      if (showNavAdmin) {
        setShowNavAdmin(false)
      }
    }

    window.addEventListener('click', mouseDownHandler)

    return () => {
      window.removeEventListener('click', mouseDownHandler)
    }
  }, [showNavAdmin, showNavUser])

  if (userInfo) {
    return (
      <>
        <div className="relative md:self-center">
          <button
            className="flex items-center text-slate-400"
            onClick={buttonNavUserHandler}
          >
            {userInfo.name} <FaCaretDown />
          </button>
          <ul
            className={`md:absolute z-10 w-full md:w-32 mt-2 bg-slate-50 py-2 border border-slate-700 rounded-lg right-0 top-8 ${
              showNavUser ? 'block' : 'hidden'
            }`}
          >
            <li>
              <ItemList to="/profile">Profile</ItemList>
            </li>
            <li onClick={logoutHandler}>
              <ItemList>Logout</ItemList>
            </li>
          </ul>
        </div>

        {userInfo.isAdmin && (
          <div className="relative md:self-center">
            <button
              className="flex items-center text-slate-400"
              onClick={buttonNavAdminHandler}
            >
              Admin <FaCaretDown />
            </button>
            <ul
              className={`md:absolute z-10 w-full md:w-32 mt-2 bg-slate-50 py-2 border border-slate-700 rounded-lg right-0 top-8 ${
                showNavAdmin ? 'block' : 'hidden'
              }`}
            >
              <li>
                <ItemList to="/admin/products">Products</ItemList>
              </li>
              <li>
                <ItemList to="/admin/users">Users</ItemList>
              </li>
              <li>
                <ItemList to="/admin/orders">Orders</ItemList>
              </li>
            </ul>
          </div>
        )}
      </>
    )
  }
  return (
    <ItemNav to="/login">
      <FaUser /> Sign In
    </ItemNav>
  )
}

export default NavUserInfo
