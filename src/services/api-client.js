import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63dab0867b3b4328b107ac4babec99ba",
  },
});
