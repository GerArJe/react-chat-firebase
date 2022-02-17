import React from "react";
import { auth, db, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export const ChatContext = React.createContext();

const ChatProvider = (props) => {
  const dataUsuario = { uid: null, email: null, estado: null };
  const [usuario, setUsuario] = React.useState(dataUsuario);
  const [mensajes, setMensajes] = React.useState([]);

  React.useEffect(() => {
    detectarUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detectarUsuario = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario({ uid: user.uid, email: user.email, estado: true });
        cargarMensajes();
      } else {
        setUsuario({ ...dataUsuario, estado: false });
      }
    });
  };

  const ingresoUsuario = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const cerrarSesison = () => {
    signOut(auth);
  };

  const cargarMensajes = () => {
    const q = query(collection(db, "chat"), orderBy("fecha"));
    onSnapshot(q, (querySnapshot) => {
      const arrayMensajes = querySnapshot.docs.map((item) => item.data());
      setMensajes(arrayMensajes);
    });
  };

  const agregarMensajes = async (uid, texto) => {
    try {
      await addDoc(collection(db, "chat"), {
        fecha: Date.now(),
        texto,
        uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        usuario,
        ingresoUsuario,
        cerrarSesison,
        mensajes,
        agregarMensajes,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
