import React from 'react';
import AdminRoute from './Routes/AdminRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" />
               <AdminRoute path="/admin" />
               <AdminRoute path="/admin/orders/update/:orderId" />
            </Switch>
        </Router>
    )
}

export default Routes;