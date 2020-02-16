import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

// stateless functional component 

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            {/* switch will move through route definitions in order and look for matches and will always match with 404 because there is no route matching as there is no path prop */}
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/add" component={AddExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                {/* id is a variable we will use to pass in a value */}
                {/* never going to have a just /edit link */}
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;