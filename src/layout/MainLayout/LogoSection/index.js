import React from 'react';

import {Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import config from './../../../config';

import logo from './../../../assets/images/logoPLN.png';

const LogoSection = () => {

    return (
        <React.Fragment>
            <Link component={RouterLink} to={config.defaultPath}>
                 <img src={logo} alt="PLN" width="200"/>
            </Link>
        </React.Fragment>
    );
};

export default LogoSection;
