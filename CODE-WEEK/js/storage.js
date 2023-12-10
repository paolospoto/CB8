const createData = (key, value) => localStorage.setItem(key, value);
const readData = (key) => localStorage.getItem(key);
const deleteData = (key) => localStorage.removeItem(key);
const clearData = () => localStorage.clear();

export { createData, readData, deleteData, clearData };
