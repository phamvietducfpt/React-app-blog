import React from 'react';
import { useLocation } from "react-router-dom";
function Error404() {
    let location = useLocation();
    return (
        <p>{location.pathname} Page not found </p>
    )
}
export default Error404;
