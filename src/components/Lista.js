import React, {useState} from 'react';
import ZonasA from '../components/Paginas/ZonasA';
import {ListaZonas} from "../datos/ListaZonas";


export default function Lista() {

        const [datos, setDatos]=useState(ListaZonas)
    return (

        <div className='row row-cols-1 row-cols-md-3 g-4 g-4'>
            {
                
                datos.map((persona)=> 
                    <ZonasA
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
                          
