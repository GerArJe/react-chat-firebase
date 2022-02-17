import React from "react";
import { ChatContext } from "../context/ChatProvider";

const Navbar = () => {
  const { usuario, ingresoUsuario, cerrarSesison } =
    React.useContext(ChatContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Chat</span>
      <div>
        {usuario.estado ? (
          <button
            className="btn btn-outline-danger my-2 mx-2"
            onClick={cerrarSesison}
          >
            Cerrar session
          </button>
        ) : (
          <button
            className="btn btn-outline-success my-2 mx-2"
            onClick={ingresoUsuario}
          >
            Acceder
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
