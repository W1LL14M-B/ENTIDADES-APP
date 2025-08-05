import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import EmpleadosPage from "./components/pages/EmpleadosPage.jsx";
//import SolicitudesPage from "./components/pages/SolicitudesPage.jsx"; // si existe
import Navbar from "./components/Navbar.jsx";
import { AuthContext } from "./components/hooks/AuthContext.jsx";

function App() {
  const { user } = useContext(AuthContext);

  return ( 
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Ruta pública */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/empleados" />}
          />

          {/* Rutas protegidas */}
          <Route
            path="/empleados"
            element={user ? <EmpleadosPage /> : <Navigate to="/login" />}
          />

          


          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
