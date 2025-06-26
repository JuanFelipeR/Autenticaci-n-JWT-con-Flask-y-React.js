// src/front/pages/Landing.jsx
import React from "react";
import { Navbar } from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <div>
      <Navbar /> {/* Aquí se usa el navbar */}

      {/* Hero */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">¡Descubre tu próximo videojuego favorito!</h1>
          <p className="lead">Explora los títulos más populares y consigue los mejores descuentos</p>
          <a href="#" className="btn btn-light btn-lg mt-3">Explorar juegos</a>
        </div>
      </header>

      {/* Juegos destacados */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">Juegos destacados</h2>
          <div className="row">
            {[1, 2, 3].map((game) => (
              <div className="col-md-4 mb-4" key={game}>
                <div className="card h-100">
                  <img
                    src={`https://placehold.co/400x250?text=Juego+${game}`}
                    className="card-img-top"
                    alt={`Juego ${game}`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Videojuego #{game}</h5>
                    <p className="card-text">Sumérgete en la acción con este increíble título.</p>
                    <button className="btn btn-primary mt-auto">Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} GameStore. Todos los derechos reservados.</p>
          <p className="mb-0">
            <a href="#" className="text-white me-3">Facebook</a>
            <a href="#" className="text-white me-3">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;


