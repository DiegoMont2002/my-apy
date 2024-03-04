import React, { useState } from 'react';
import Hoteles from '../components/Paginas/Hoteles';
import { ListaDatosH } from '../datos/ListaDatosH';


export default function ListaH() {
  
    const [datos, setDatos] = useState(ListaDatosH)
    return (

        <div className='row row-cols-1 row-cols-md-3 g-4 g-4'>
            {

                datos.map((persona) =>
                    <Hoteles
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

