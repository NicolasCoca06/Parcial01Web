import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListarRobots = ({ onRobotSelect }) => { 
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    
    axios.get("http://localhost:3001/robots")
      .then((response) => {
        setRobots(response.data);
      })
      .catch((error) => {
        console.error("Error fetching robots:", error);
        setError("No se pudo cargar el listado de robots. Inténtelo de nuevo más tarde.");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
      <img
        src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
        alt="Robots"
        className="img-fluid mx-auto d-block"
        style={{ marginBottom: "20px" }}
      />
      {error ? (
        <p className="text-danger text-center">{error}</p>
      ) : (
        <table className="table table-striped table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Empresa Fabricante</th>
              <th>Detalles</th> {}
            </tr>
          </thead>
          <tbody>
            {robots.map((robot) => (
              <tr key={robot.id}>
                <td>{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => onRobotSelect(robot.id)}>
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="text-center mt-4">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </div>
    </div>
  );
};

export default ListarRobots;
