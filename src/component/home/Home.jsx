import React, { Component } from "react";
import { Banner } from "../Banner";

export class Home extends Component {
  state = {
    global: {},
    contrywiseDetails: [],
    currentLocationStatus: {},
    location: {}
  };
  componentWillMount = () => {
    fetch("https://d.pub.network/location")
      .then(res => res.json())
      .then(res => this.setState({ location: res }));

    fetch("https://api.coronatracker.com/v3/stats/worldometer/global")
      .then(res => res.json())
      .then(res => {
        this.setState({ global: res });
      });

    fetch("https://api.coronatracker.com/v3/stats/worldometer/country")
      .then(res => res.json())
      .then(res => {
        this.setState({ contrywiseDetails: res });
      });
  };

  render() {
    const { contrywiseDetails, global, location } = this.state;

    let countryData;
    contrywiseDetails.map(data => {
      if (data.countryCode === location.countryCode) {
        countryData = data;
      }
    }, []);

    console.log("countryData", countryData);

    return (
      <div className="container">
        {global && (
          <Banner countryLabel="WorldWide" {...global} {...this.props} />
        )}
        {countryData && (
          <Banner
            countryLabel={countryData.country}
            totalConfirmed={countryData.totalConfirmed}
            totalDeaths={countryData.totalDeaths}
            totalActiveCases={countryData.activeCases}
            totalRecovered={countryData.totalRecovered}
            totalNewCases={countryData.dailyConfirmed}
            {...this.props}
          />
        )}
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
                      <label className="detailValue">
                        {contry.totalConfirmed}
                      </label>
                    </div>
                    <div>
                      <label className="detailLabel">Active </label>{" "}
                      <label className="detailValue">
                        {" "}
                        {contry.activeCases}
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label className="detailLabel">Deaths </label>{" "}
                      <label className="detailValue">
                        {" "}
                        {contry.totalDeaths}
                      </label>{" "}
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
      </div>
    );
  }
}
