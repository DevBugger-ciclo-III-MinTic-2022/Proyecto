import React from 'react';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    useEffect(() => {
      const fetchAuth0Token = async ()=>{
        const accessToken = await getAccessTokenSilently({
          audience: 'api-autenticacion-troliviano-mintic',
        });
        console.log(accessToken);
      };
      fetchAuth0Token();
    }, []);

  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? <>{children}</> : 
  <div>
  <div className='text-red-500 font-bold text-4xl'>No estas autorizado para ingresar a este sitio</div>
  <Link to='/'><span className='text-2xl font-bold text-indigo-600'>Regresar al inicio</span></Link>
  </div>
};
export default PrivateRoute;