import { NavLink } from 'react-router-dom'

const ItemList = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="bg-slate-50 text-slate-500 block p-1 hover:bg-slate-200"
    >
      {children}
    </NavLink>
  )
}

export default ItemList
