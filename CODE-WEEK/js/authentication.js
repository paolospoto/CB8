import { createData, readData, deleteData, clearData } from "./storage.js";

const authenticationCheck = () => {
  if (readData("username")) {
    return true;
  } else {
    return false;
  }
};

export { authenticationCheck };
