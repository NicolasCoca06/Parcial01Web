import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormattedMessage, useIntl} from 'react-intl';

const FormularioLogin = ({ onLogin }) => {

  const intl = useIntl();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "pass") {
      onLogin(true);
    } else {
      setError(intl.formatMessage({id:"error"}));
    }
  };

  return (
    <div className="container" style={{ maxWidth: "500px", marginTop: "50px" }}>
      <div className="text-center">
        <h1>{intl.formatMessage({id:"banner"})}</h1>
        <img 
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__" 
          alt="Robots" 
          className="img-fluid" 
          style={{ marginBottom: "20px" }} 
        />
      </div>

      <form onSubmit={handleSubmit} className="border p-4 shadow-sm">
        <h2 className="text-center">{intl.formatMessage({id:"login"})}</h2>
        <div className="form-group">
          <label htmlFor="username">{intl.formatMessage({id:"user"})}:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">{intl.formatMessage({id:"pass"})}:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary">{intl.formatMessage({id:"loginButton"})}</button>
          <button type="button" className="btn btn-danger">{intl.formatMessage({id:"cancel"})}</button>
        </div>

        {error && <p className="text-danger mt-3 text-center">{error}</p>}
      </form>

      <div className="text-center mt-4">
        <p>{intl.formatMessage({id:"contact"})}: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </div>
    </div>
  );
};

export default FormularioLogin;
