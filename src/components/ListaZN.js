import React, {useState} from 'react';
import ZonasN from '../components/Paginas/ZonasN';
import { ListaZonasN } from '../datos/ListaZonasN';


export default function ListaZN() {

        const [datos, setDatos]=useState(ListaZonasN)
    return (

        <div className='row row-cols-1 row-cols-md-3 g-4 g-4'>
            {
                
                datos.map((persona)=> 
                    <ZonasN
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
                          
