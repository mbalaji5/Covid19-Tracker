import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const CountryWiseGrid = props => {
  const { contrywiseDetails: rowData } = props;

  const columnDefs = [
    {
      headerName: "Country",
      field: "country",
      maxWidth: 220,
      sortable: true,
      filter: "agTextColumnFilter",
      cellStyle: { "text-align": "left", width: "180px" }
    },
    {
      headerName: "Confirmed",
      field: "totalConfirmed",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { color: "red", "text-align": "left" }
    },
    {
      headerName: "Deaths",
      field: "totalDeaths",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { color: "red", "text-align": "left" }
    },

    {
      headerName: "Active",
      field: "activeCases",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { "text-align": "left" }
    },
    {
      headerName: "Critical",
      field: "totalCritical",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { color: "red", "text-align": "left" }
    },
    {
      headerName: "New",
      field: "dailyConfirmed",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { "text-align": "left" }
    },
    {
      headerName: "Recovered",
      field: "totalRecovered",
      maxWidth: 180,
      sortable: true,
      filter: "agNumberColumnFilter",
      cellStyle: { color: "green", "text-align": "left" }
    }
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "1180px",
        width: "auto",
        margin: "50px 24px"
      }}
    >
      <AgGridReact
        rowSelection="single"
        columnDefs={columnDefs}
        rowData={rowData}
      ></AgGridReact>
    </div>
  );
};
