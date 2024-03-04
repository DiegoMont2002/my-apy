import React from 'react'
import './profile.css';


export default function Home() {
  return (


    <>
      <div className="card" style={{ width: 20  + 'rem' }}>
        <img src="https://www.famousbirthdays.com/faces/espino-danna-image.jpg"
          className="rounded-circle imagen-circular" alt="imagen-centrada"
          height={150} width={150}></img>

        <div className="card-body">
          <h5 className="name">DANNA ESPINO</h5>
          <h6 className="name">@danna_espino</h6>
          <p className="card-text">(:</p>

          <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <button type="button" class="btn btn-clarity position-relative"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png" class="" alt=""
                height={25} width={25}></img>
                Mi Perfil
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button></li>
            <li className="list-group-item">
              <button type="button" class="btn btn-clarity"><img src="https://cdn-icons-png.flaticon.com/128/1441/1441078.png" class="" alt=""
                height={25} width={25}></img>
                Amigos <span class="badge text-bg-secondary"></span>
              </button></li>
            <li className="list-group-item">
              <button type="button" class="btn btn-clarity"><img src="https://cdn-icons-png.flaticon.com/128/4439/4439167.png" class="" alt=""
                height={25} width={25}></img>
                Notifications <span class="badge text-bg-secondary">4</span>
              </button></li>
            <li className="list-group-item">
              <button type="button" class="btn btn-clarity position-relative"><img src="https://cdn-icons-png.flaticon.com/128/2052/2052739.png" class="" alt=""
                height={25} width={25}></img>
                Chats
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button></li>
            <li className="list-group-item">
              <button type="button" class="btn btn-clarity"><img src="https://cdn-icons-png.flaticon.com/128/1040/1040221.png" class="" alt=""
                height={25} width={25}></img>
                Ajustes <span class="badge text-bg-secondary"></span>
              </button></li>
            <li className="list-group-item">
              <button type="button" className="btn btn-clarity"><img src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png" class="" alt=""
                height={25} width={25}></img>
                Cerrar Sesión <sapn className="badge text-bg-secondary"></sapn>
              </button></li>
          </ul>
        </div>
      </div>
    </>

  )
}
