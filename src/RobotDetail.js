import React, { useState, useEffect } from "react";
import axios from "axios";
import {FormattedMessage, useIntl} from 'react-intl';

const RobotDetail = ({ robotId }) => {
  const intl = useIntl();

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
      <img src={robot.imagen + "?raw=trues"} className="card-img-top" alt={robot.nombre} /> {}
      <div className="card-body">
        <h4 className="card-title text-center">{robot.nombre}</h4>
        <ul className="list-unstyled">
          <li><strong>{intl.formatMessage({id:"año"})}:</strong> {robot.añoFabricacion}</li>
          <li><strong>{intl.formatMessage({id:"process"})}:</strong> {robot.capacidadProcesamiento}</li>
          <li><strong>{intl.formatMessage({id:"humor"})}:</strong> {robot.humor}</li>
        </ul>
      </div>
    </div>
  );
};

export default RobotDetail;
