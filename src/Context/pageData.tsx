import React, { createContext, useState, useEffect, useCallback } from "react";
import getPayload from "../utils/getPayload";
import { dataTypes } from "../utils/dataTypes";
import { DataModel, DataDefaultValue } from "../Interfaces/Interfaces";

const DataContext = createContext<DataModel>(DataDefaultValue);

//create custom hook for this
const baseUrl: string = location.href.includes("localhost")
  ? "http://localhost:8888/portfolio"
  : "https://craigbauer.dev";

function Provider({ children }) {
  const [data, setData] = useState<DataModel>(DataDefaultValue);

  const fetchData = useCallback(async (baseUrl: string, path: string) => {
    const response = await getPayload(baseUrl, path);
    setData(response);
  }, []);

  useEffect(() => {
    //calling async on useEffect forces it to return a promise instead of a cleanup function
    fetchData(baseUrl, dataTypes.data);
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export { Provider };
export default DataContext;
