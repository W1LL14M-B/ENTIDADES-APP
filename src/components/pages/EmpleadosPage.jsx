import { useState, useEffect } from "react";
import empleadoService from "../service/empleadoService";

function EmpleadosPage() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    empleadoService.getAll().then(setEmpleados);
  }, []);

  return (
    <div>
      <h2>Lista de empleados</h2>  
      <ul>
        {empleados.map((e) => (
          <li key={empleadoService.id}>{e.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmpleadosPage;
