import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function BarraMenu() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/">
      <img src="https://cdn-icons-png.flaticon.com/128/8228/8228741.png" width="50"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link " to="/">INICIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hoteles">HOTELES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/restaurantes">RESTAURANTES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/zonasa">ZONAS ARQUEOLÓGICAS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/zonasn">ZONAS NATURALES</Link>
        </li>
        <li>
          <Link className='nav.link'  to="login">INICIAR</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success"  type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
<hr />
<Outlet />
</header>
  )
}