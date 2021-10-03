import Index from 'pages/Index';
import Registro from 'pages/ventas/Registro';
import Reportes from 'pages/ventas/Reportes';
import Productos from 'pages/ventas/Productos';
import Usuarios from 'pages/usuarios/Usuarios';
import Login from 'pages/usuarios/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublicLayout from 'layouts/PublicLayout';
import 'styles/styles.css';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';



function App() {
  return <Router>
    <Switch>
    <Route path={['/ventas/registro', '/ventas/productos','/ventas/reportes']}>
      <PrivateLayout>
        <Switch>
          <Route path='/ventas/registro'>
            <Registro />
          </Route>
          <Route path='/ventas/productos'>
            <Productos />
          </Route>
          <Route path='/ventas/reportes'>
            <Reportes />
          </Route>
        </Switch>
      </PrivateLayout>
    </Route>
    <Route path={['/usuarios', '/login']}>
      <AuthLayout>
        <Switch>
          <Route path='/usuarios'>
            <Usuarios />
          </Route>
          <Route path='/login'>
            <Login />
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
</Router>;
};

export default App;
