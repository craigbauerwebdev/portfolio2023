import axios from "axios";
import { dataTypes } from "./dataTypes";

const getPayload = async (baseUrl: string, path: string) => {
  const response: any = await axios.get(`${baseUrl}${path}`);
  switch (path) {
    case dataTypes.data:
      return response.data.acf;
    case dataTypes.experience:
      const expData = response.data.map((job) => {
        return { ...job.acf, id: job.id };
      });
      return expData;
    default:
      return response.data;
  }
};

export default getPayload;
