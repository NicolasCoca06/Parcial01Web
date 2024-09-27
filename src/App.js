import React, { useState } from "react";
import FormularioLogin from "./FormularioLogin";
import ListarRobots from "./ListarRobots";
import RobotDetail from "./RobotDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const handleRobotSelect = (id) => {
    setSelectedRobotId(id); 
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <FormularioLogin onLogin={handleLogin} />
      ) : (
        <div className="container mt-4">
          <div className="row">
            {}
            <div className="col-md-8">
              <ListarRobots onRobotSelect={handleRobotSelect} />
            </div>
            
            {}
            <div className="col-md-4">
              {selectedRobotId ? (
                <RobotDetail robotId={selectedRobotId} />
              ) : (
                <p className="text-center">Seleccione un robot para ver los detalles</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
