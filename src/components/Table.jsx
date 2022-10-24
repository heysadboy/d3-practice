import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import file from "../data/file.csv";

const Table = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const getRowKey = (item) => {
    return `${item.origin}-${item.destination}-${item.short_name}`;
  };

  const getHeaders = () => {
    return (
      <tr>
        {columns.map((title) => {
          return <th key={title}>{title}</th>;
        })}
      </tr>
    );
  };

  const getRows = () => {
    return data.map((item) => {
      if (typeof item === "object") {
        const key = getRowKey(item);
        return (
          <tr key={key}>
            {columns.map((row) => {
              return (
                <td key={`${row}-${key}`} data-label={row}>
                  {item[`${row}`]}
                </td>
              );
            })}
          </tr>
        );
      }
      return false;
    });
  };

  useEffect(() => {
    const getCsvData = async () => {
      const csvData = await d3.csv(file);
      setData(csvData);
      setColumns(csvData.columns);
    };
    getCsvData();
  }, []);

  return (
    <div>
      <table className="ui celled table">
        <thead>{getHeaders()}</thead>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
