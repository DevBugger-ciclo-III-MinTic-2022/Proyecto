import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Productos from 'pages/admin/Productos';
import Login from 'pages/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import PrivateRoute from 'componentes/PrivateRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider 
      domain="misiontic-troliviano.us.auth0.com"
      clientId="EPqXjd6kFTml6hmTKY6FuMLRQ83NFZEC"
      redirectUri='https://vast-gorge-29367.herokuapp.com/admin'
      audience='api-autenticacion-troliviano-mintic'>

      <div className='App'>
        <UserContext.Provider value={{userData, setUserData}}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Switch>
            <Route path={['/admin', '/admin/productos', '/admin/usuarios', '/admin/ventas']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/productos'>
                    <PrivateRoute roleList={['admin']}>
                      <Productos />
                    </PrivateRoute>
                  </Route>
                  <Route path='/admin/usuarios'>
                   <PrivateRoute roleList={['admin']}>
                    <Usuarios />
                  </PrivateRoute>
                  </Route>
                  <Route path='/admin/ventas'>
                   <PrivateRoute roleList={['admin', 'vendedor']}>
                    <Ventas />
                    </PrivateRoute>
                  </Route>
                  <Route path='/admin'>
                    <Admin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route path={['/login', '/registro']}>
              <AuthLayout>
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/registro'>
                    <Registro />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            <Route path={['/']}>
              <PublicLayout>
                <Route path='/'>
                  <Index />
                </Route>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </DarkModeContext.Provider>
      </UserContext.Provider>
      </div>
    </Auth0Provider>    
  );
}

export default App;
