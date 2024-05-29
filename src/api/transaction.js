import axios from "axios";

import { baseUrl, config } from "../utils/Config";

export const getTransaction = async () => {
  try {
    const response = await axios.get(baseUrl + "/transaksi/", config());
    return response.data.transaksi;
  } catch (error) {
    return console.log(error)
  }
};

export const addTransaction = async (data) => {
  try {
    const response = await axios.post(
      baseUrl + "/transaksi/",
      data,
      config()
    );
    return response.data;
  } catch (error) {
    return console.log(error)
  }
};
