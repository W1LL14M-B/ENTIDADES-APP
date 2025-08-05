import { useState, useEffect } from "react";
import empleadoService from "../service/empleadoService";

function EmpleadosPage() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    empleadoService.getAll().then(setEmpleados);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista de empleados</h2>
      <ul className="list-group">
        {empleados.map((e) => (
          <li key={e.id} className="list-group-item">
            {e.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmpleadosPage;
