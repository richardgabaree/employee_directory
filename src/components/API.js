import axios from "axios";

const response getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=200&nat=us");
}