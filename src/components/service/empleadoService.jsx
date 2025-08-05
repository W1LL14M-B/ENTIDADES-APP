import axios from "axios"

const API = "http://localhost:3000/api/empleados";


const getAll = async () => {

const token = localStorage.getItem("token")
const res = await axios.get(API,{
  headers: { Authorization: `Bearer ${token}`}

});
return res.data

 
}


export default { getAll}