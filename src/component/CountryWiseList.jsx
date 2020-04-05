import React from "react";

export const CountryWiseList = props => {
  const { contrywiseDetails } = props;
  return (
    <div className="status-container">
      {contrywiseDetails &&
        contrywiseDetails.map(contry => {
          return (
            <div className="status">
              <label className="contryLabel">{contry.country}</label>
              <br />
              <div className="row">
                <div>
                  <label className="detailLabel">Confirmed </label>
                  <label className="detailValue">{contry.totalConfirmed}</label>
                </div>
                <div>
                  <label className="detailLabel">Active </label>{" "}
                  <label className="detailValue"> {contry.activeCases}</label>
                </div>
              </div>
              <div className="row">
                <div>
                  <label className="detailLabel">Deaths </label>{" "}
                  <label className="detailValue"> {contry.totalDeaths}</label>{" "}
                </div>
                <div>
                  <label className="detailLabel">Recovered </label>
                  <label className="detailValueRecovered">
                    {contry.totalRecovered}
                  </label>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
