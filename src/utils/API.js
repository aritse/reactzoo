import axios from "axios";

// const URL = "http://localhost:8080";
const URL = "https://zoo-react-ari-api.herokuapp.com";

const API = {
  getAllAnimals: () => axios.get(`${URL}/api/animals`),
  getAllByClass: className => axios.get(`${URL}/api/animals/class/${className}`)
};

export default API;
