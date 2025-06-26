import React, { useEffect, useState } from "react";

const Private = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND_URL + "/api/private", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar datos privados:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando información...</p>;

  if (!data || !data.msg) {
    return <p>⚠️ No autorizado o error en el servidor</p>;
  }

  return (
    <div className="container mt-5 text-center">
      <h1>Vista Privada</h1>
      <p>{data.msg}</p>
    </div>
  );
};

export default Private;





