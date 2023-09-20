import React, { createContext, useState, useEffect, useCallback } from "react";
import getPayload from "../utils/getPayload";
import { dataTypes } from "../utils/dataTypes";
import { DataModel } from "../Interfaces/Interfaces";
// @ts-ignore
//import useBaseUrl from "../hooks/use-base-url";

const DataContext = createContext({} as DataModel); // instead of providing all props on the object

const baseUrl: string = location.href.includes("localhost")
  ? "http://localhost:8888/portfolio"
  : "https://craigbauer.dev";

function Provider({ children }) {
  const [data, setData] = useState({} as DataModel); // instead of providing all props on the object
  //const baseUrl = useBaseUrl("");

  const fetchData = useCallback(async (baseUrl: string, path: string) => {
    const response = await getPayload(baseUrl, path);
    setData(response);
  }, []);

  useEffect(() => {
    //calling async on useEffect forces it to return a promise instead of a cleanup function
    fetchData(baseUrl, dataTypes.data);
  }, []);

  //console.log(data);

  /* const pageData: { data: DataModel; baseUrl: string; env: string } = {
    data,
    baseUrl,
    env: location.href.includes("localhost") ? "dev" : "prod",
  }; */

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export { Provider };
export default DataContext;
