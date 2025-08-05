// Login.jsx
import { useState, useContext } from "react";
import authService from "../service/authService";
import { AuthContext } from "../hooks/AuthContext"; // ajusta ruta si es contexts

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authService.login(username, password);
      if (userData.token) {
        login(userData.token); // ahora se llama desde contexto
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Entrar
      </button>
    </form>
  );
}

export default Login;
