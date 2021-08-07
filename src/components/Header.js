import {  NavLink} from 'react-router-dom';
import React from 'react';

const Header = ()=> (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-activ" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-activ">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-activ">Help </NavLink>
    </header>
  )
  export default Header;