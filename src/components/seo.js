import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ children }) => (
    <Helmet>
        <meta charset='utf-8'/>
        { children }
    </Helmet>
);
