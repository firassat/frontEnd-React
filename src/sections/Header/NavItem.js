import React from 'react'

const NavItem = (props) => {
  return (
    <li className="nav-item px-2">
        {props.children}
    </li>
  )
}

export default NavItem