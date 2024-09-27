import React, { useState, useEffect } from "react";
import axios from "axios";

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/robots/${robotId}`)
      .then((response) => {
        setRobot(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching robot details:", error);
        setError("No se pudo cargar el detalle del robot.");
      });
  }, [robotId]);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!robot) {
    return <p>Cargando detalles del robot...</p>;
  }

  return (
    <div className="card">
      <img src={robot.imagen} className="card-img-top" alt={robot.nombre} /> {}
      <div className="card-body">
        <h4 className="card-title text-center">{robot.nombre}</h4>
        <ul className="list-unstyled">
          <li><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</li>
          <li><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</li>
          <li><strong>Humor:</strong> {robot.humor}</li>
        </ul>
      </div>
    </div>
  );
};

export default RobotDetail;
