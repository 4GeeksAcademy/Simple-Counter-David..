import React from "react";

const Digito = ({numero,unidad}) => {
    return (
        <div>
            <h1 class="text-white p-5">{numero}</h1>
            <h3 class="text-white p-5 pt-0">{unidad}</h3>
        </div>
        
    );
};

export default Digito;
