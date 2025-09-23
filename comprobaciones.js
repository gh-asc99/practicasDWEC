"use strict";

function esNumero() {
    for(let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] !== "number"){
            return false;
        }
    }
    return true;
}

export { esNumero };