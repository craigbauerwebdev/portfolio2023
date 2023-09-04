import axios from "axios";

const getPayload = async (apiBase: string, path: string) => {
  //console.log(typeof apiBase, typeof path, `${apiBase}${path}`);
  let data: string;
  await axios
    .get(`${apiBase}${path}`)
    .then((resp) => {
      console.log(resp.data);
      data = resp.data;
    })
    .catch(() => console.log("Could not fetch data"));
  //return data;
};

export default getPayload;
