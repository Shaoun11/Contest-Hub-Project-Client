

import { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { Authcontext } from '../Components/AuthProvider/AuthProvider';



const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
    const location=useLocation();
   
     
    if (loader) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
     return <Navigate state={location.pathname} to={"/login"} ></Navigate>

  
};

export default PrivateRoute;