import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, { username, password });
  return res.data;
};

export default { login };