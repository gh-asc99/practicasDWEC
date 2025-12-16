"use strict";

import { useEffect } from "react";

const IniciarLocalStorage = (props) => {
    useEffect(() => {
        if (!localStorage.getItem("discos")) {
            localStorage.setItem("discos", JSON.stringify([]));
        }
    }, []);
    return (
        <>
        {props.children}
        </>
    );
};

export default IniciarLocalStorage;