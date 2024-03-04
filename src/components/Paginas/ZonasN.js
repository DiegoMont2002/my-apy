import React from "react";

function ZonasN (props){
   // console.log(props);
    const{nombre, telefono, ubicacion, imagenes} = props;
    const Mensaje=()=>{
      alert('Hola a todos')
    }
    return (
      <>
        
          <div class="col">
            <div class="card h-100">
              <img src={imagenes} 
              class="card-img-top" alt="..." 
              width={80}
              height={300}
              />
              <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">
                 Telefono: {telefono}
                </p>
                <p class="card-text">
                Ubicacion:{ubicacion}
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary"><button type="button"
                 class="btn btn-info"
                 onClick={Mensaje}
                 >
                  
                  Entrar...</button></small>
              </div>
            </div>
          </div>
       
      </>
    );
  }
  
  export default ZonasN;
  