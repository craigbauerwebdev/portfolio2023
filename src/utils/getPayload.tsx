import axios from "axios";
import { useState } from "react";

const getPayload = async (apiBase: string, path: string) => {
  //console.log(typeof apiBase, typeof path, `${apiBase}${path}`);
  //const [data, setData] = useState([]);
  //let data: string;
  await axios
    .get(`${apiBase}${path}`)
    .then((resp) => {
      console.log(resp.data);
      return resp.data;
      //return data;
    })
    .catch(() => console.log("Could not fetch data"));
};

export default getPayload;
