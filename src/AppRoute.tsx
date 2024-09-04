import React, { useEffect, useState } from 'react';
import routes from './Routes';
import { Routes, Route, useLocation } from 'react-router-dom';

const AppRoute = ():JSX.Element =>{



    const [pageTile, setPageTitle] = useState("");
    const location = useLocation();

    useEffect(() => {
        
        
        
      }, [location.pathname]);

    return (
        <>

        
        </>
    );
}

export default AppRoute;