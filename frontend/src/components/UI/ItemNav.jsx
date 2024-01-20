import { NavLink } from 'react-router-dom'

const ItemNav = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1 text-slate-400 ${isActive && 'text-slate-50'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default ItemNav
