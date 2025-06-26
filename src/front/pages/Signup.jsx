// src/front/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // estilos globales si los tienes

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.first_name || !form.last_name) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password !== form.repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        first_name: form.first_name,
        last_name: form.last_name,
      }),
    });

    if (resp.ok) {
      alert("Usuario registrado con éxito");
      navigate("/login");
    } else {
      const error = await resp.json();
      alert(error.msg || "Error al registrarse");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              required
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Repetir contraseña"
            required
            onChange={(e) => setForm({ ...form, repeatPassword: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>

        <div className="text-center mt-3">
          <p>¿Ya tienes una cuenta?</p>
          <button onClick={() => navigate("/login")} className="btn btn-outline-primary">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;








