import React, { useEffect } from "react";
import { csv } from "d3-fetch";
import file from "../data/file.csv";

const App = () => {
  const getData = async () => {
    const data = await csv(file);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Hi</div>;
};

export default App;
