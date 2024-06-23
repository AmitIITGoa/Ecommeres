import axios from "axios";

const BASE_URL = "http://localhost:5000/";



const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNkZWU5NmY5MGJiYjMzZTA5YjBjNiIsImlhdCI6MTcxODg2OTk5MywiZXhwIjoxNzE5MTI5MTkzfQ.rgZ4X3GHEsA3Y9MAnd4a6S9IMe2EWLH27bLn39AjaQM";


// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

export const publicRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: "amit eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNkZWU5NmY5MGJiYjMzZTA5YjBjNiIsImlhdCI6MTcxODg2OTk5MywiZXhwIjoxNzE5MTI5MTkzfQ.rgZ4X3GHEsA3Y9MAnd4a6S9IMe2EWLH27bLn39AjaQM" },
  });
  