import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  withCredentials: true,
});

export async function getAccounts() {
  const res = await api.get("accounts");
  return res.data;
}
