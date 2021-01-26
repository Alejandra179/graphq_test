import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RoutesItems } from './../utils';
import { MenuBar } from './../components';

const GeneralLayout = () => {
    return (
        <>
            <MenuBar/>
            <Switch>
                {
                    RoutesItems.map((route, key) => {
                        return(
                            <Route
                                key={key}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        )
                    })
                }
            </Switch>
        </>
    )
}

export default GeneralLayout;