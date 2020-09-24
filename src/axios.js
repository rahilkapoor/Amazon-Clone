import axios from "axios";

const instance = axios.create({
	baseURL: "...", //The api url // cloud function
});

export default instance;
