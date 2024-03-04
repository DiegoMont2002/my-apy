import React from "react";
import { Link } from "react-router-dom";

function Hoteles (props){
   // console.log(props);
    const{nombre, telefono, ubicacion, imagenes} = props;
   
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
                
                 <Link className="nav-link" to="/entrar"> <button type="button"class="btn btn-dark">Entrar</button></Link>
                  
              </div>
            </div>
          </div>
       
      </>
    );
  }
  
  export default Hoteles;
  