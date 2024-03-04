import React, {useState} from 'react';
import Restaurantes from '../components/Paginas/Restaurantes';
import {ListaDatosR} from "../datos/ListaDatosR";


export default function ListaR() {

        const [datos, setDatos]=useState(ListaDatosR)
    return (

        <div className='row row-cols-1 row-cols-md-3 g-4 g-4'>
            {
                
                datos.map((persona)=> 
                    <Restaurantes
                        key={persona.id}
                        nombre={persona.nombre}
                        telefono={persona.tel}
                        ubicacion={persona.ubicacion}
                        imagenes={persona.imag}
                    />)

                }
            
        </div>
    )
}
                          
