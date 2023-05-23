// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blog from '../Pages/Blog/Blog';
import Addtoy from '../Pages/Addtoy/Addtoy';
import Errorpage from '../Layout/Errorpage';
import Alltoy from '../Pages/Alltoy/Alltoy';
import Mytoy from '../Pages/My toy/Mytoy';
import ToyDetailsPage from '../Pages/Alltoy/ToyDetailsPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const getTitle = (path) => {
      switch (path) {
        case '/':
          return 'Edutoy';
        case '/about':
          return 'Edutoy | About us';
        case '/contact':
          return 'Edutoy | Contact us';
        // Add more cases for other routes if needed
        default:
          return 'Edutoy';
      }
    };

    document.title = getTitle(location.pathname);
  }, [location.pathname]);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/blog" component={Blog} />
              <PrivateRoute path="/addtoy" component={Addtoy} />
              <Route path="/alltoy" component={Alltoy} />
              <PrivateRoute path="/alltoy/:id" component={ToyDetailsPage} />
              <PrivateRoute path="/mytoy" component={Mytoy} />
              <Route component={Errorpage} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
