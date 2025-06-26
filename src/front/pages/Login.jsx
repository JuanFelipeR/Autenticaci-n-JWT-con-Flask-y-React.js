import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (resp.ok) {
        const data = await resp.json();
        sessionStorage.setItem("token", data.access_token);
        navigate("/landing"); // redirecciona a la landing
      } else {
        const error = await resp.json();
        alert(error.msg || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
        <p className="mt-3 text-center">
          ¿No tienes una cuenta?{" "}
          <a href="/signup" className="text-decoration-none">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;








