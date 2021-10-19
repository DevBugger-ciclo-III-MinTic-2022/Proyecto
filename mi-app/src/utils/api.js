import axios from 'axios';

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET',
    url: 'http://localhost:5000/productos/',
    headers: {
      Authorization: 
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjN5ZWZ4ZzVfeXB6VVZraURfRTFqUSJ9.eyJpc3MiOiJodHRwczovL21pc2lvbnRpYy10cm9saXZpYW5vLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDQyMjMxNDA4OTI1NzM4Mzc1NSIsImF1ZCI6WyJhcGktYXV0ZW50aWNhY2lvbi10cm9saXZpYW5vLW1pbnRpYyIsImh0dHBzOi8vbWlzaW9udGljLXRyb2xpdmlhbm8udXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYzNDYwNzUzNCwiZXhwIjoxNjM0NjkzOTM0LCJhenAiOiJFUHFYamQ2a0ZUbWw2aG1US1k2RnVNTFJRODNORlpFQyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.a0YvJPOZm-cOH9Ol8TFdrawIal9wpi3Cfhp5Nsceg4xTFAuJ1vgbZ7sLToCo4qzQHVNpHn6KR2s-_rR-FOA9_rQJk4esLqg-zKa1xK99SW1B3d_OVP_rP_u-Vf9vVtShz2x3SrVyrSISsgDa2pvEbDjW7QJoTJls4D_5t5Yf1XrFvamPmE4-XDugCNK5DZVD-tRvW5q3GsZNCmOORyPMolphJ9mN1io-cPccdpmyKT8ciBGRh1qmp5ct580EKPCyl3yXggsctcNCoMFXcDctXRNmNZ_WMGciJt4R_cIV319dJXweWs99ZYtVkmt7lTq9SnB8DbuYWVx8qRVC3BnZng',
  },
};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productos/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/productos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/productos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//*****CRUD PARA LOS USUARIOS*****

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/usuarios/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//*********CRUD VENTAS *********

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = { 
    method: 'POST', 
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json' },
    data,
};
await axios.request(options).then(successCallback).catch(errorCallback);
};

