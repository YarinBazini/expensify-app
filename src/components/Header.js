import {  NavLink} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout})=> (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-activ" >Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-activ">Create Expense</NavLink>
        <button onClick ={startLogout}>Logout</button>
    </header>
  )

  const mapDispatchToProps = (dispatch)=> ({
    startLogout: ()=> dispatch(startLogout())
  })


  export default connect(undefined, mapDispatchToProps)(Header);