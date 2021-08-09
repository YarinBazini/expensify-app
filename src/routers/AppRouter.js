import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensedPage from './../components/AddExpensedPage';
import EditExpensedPage from './../components/EditExpensedPage';
import PublicRoute from './PublicRoute';
import NotFoundPage from './../components/NotFoundPage';
import React from 'react';
import  LoginPage  from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';



  export const history = createHistory();
  
  const AppRouter = ()=>(
    <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage}  exact={true}/>
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                    <PrivateRoute path="/create" component={AddExpensedPage}/>
                    <PrivateRoute path="/edit/:id" component={EditExpensedPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        
    </Router>
  )

export default AppRouter;