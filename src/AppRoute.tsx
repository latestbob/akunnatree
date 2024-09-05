import React, { useEffect, useState } from 'react';
import routes from './Routes';
import { Routes, Route, useLocation } from 'react-router-dom';

const AppRoute = ():JSX.Element =>{



    const [pageTile, setPageTitle] = useState("");
    const location = useLocation();

    useEffect(() => {
        

        // check the currentroute

        const currentRoute = routes.find(route => route.path === location.pathname);


        if(currentRoute && currentRoute.pageTile){
            document.title = currentRoute.pageTile;
        }
        
        
      }, [location.pathname]);

    return (
        <>

            {/* return routes here */}

            <Routes>
                    {
                        routes.map(({id, path,component:Component, exact, auth}) => (
                            <Route
                            key={id}
                            path={path}
                            element={<Component />}
                          />
                        ))
                    }
            </Routes>

        
        </>
    );
}

export default AppRoute;