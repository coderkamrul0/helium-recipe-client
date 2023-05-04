import React, { useContext } from 'react';
import { AuthContent } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContent);
    const location = useLocation();


    if(loading){
        return <Container className='d-flex  pt-5 justify-content-center align-items-center'>
            <Spinner animation="border" variant="danger" />
        </Container>
    }
    

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;