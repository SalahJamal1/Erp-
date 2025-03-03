import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  withCredentials: true,
});

export async function getAccounts() {
  const res = await api.get("accounts");
  return res.data;
}

export async function createAccount(data) {
  const res = await api.post("accounts", data);
  return res;
}
export async function updateAccount(id, data) {
  const res = await api.patch(`accounts/${id}`, data);
  return res;
}
export async function getAccountById(id) {
  const res = await api.get(`accounts/${id}`);
  return res.data;
}
export async function getAccountByAccountNumber(accountNumber) {
  const res = await api.get(
    `accounts/byAccountNumber?accountNumber=${accountNumber}`
  );
  return res.data;
}
export async function createJouranl(data) {
  console.log(data);
  const res = await api.post(`/accounts/journal/journal-entry`, data);
  console.log(res);
  return res.data;
}
