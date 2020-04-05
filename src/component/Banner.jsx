import React from "react";

export const Banner = (props) => {
  const {
    totalConfirmed,
    totalDeaths,
    totalActiveCases,
    totalRecovered,
    totalNewCases,
    countryLabel,
  } = props;
  return (
    <div className="currentLocation-status">
      <label class="country-label">{countryLabel}</label>
      <div className="contryDetails">
        <div className="confirmedDetails">
          <label className="confirmed">Confirmed</label>
          <label className="confirmed-value">{totalConfirmed}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">Deaths</label>
          <label className="confirmed-value">{totalDeaths}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">ActiveCases</label>
          <label className="confirmed-value">{totalActiveCases}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">Recovered</label>
          <label className="recovered-value">{totalRecovered}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">NewCases</label>
          <label className="confirmed-value">{totalNewCases}</label>
        </div>
      </div>
    </div>
  );
};
