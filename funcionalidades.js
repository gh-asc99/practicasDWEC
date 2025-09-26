"use strict";

let imprimirArray = (array) => {
    for (let elementos in array){
        console.log(array[elementos]);
    }
};

export { imprimirArray };