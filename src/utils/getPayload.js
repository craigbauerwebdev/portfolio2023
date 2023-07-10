import axios from "axios";

const getPayload = async (apiBase, path) => {
  let data;
  await axios.get(`${apiBase}${path}`).then((resp) => {
    data = resp.data;
  });
  return data;
};

export default getPayload;
