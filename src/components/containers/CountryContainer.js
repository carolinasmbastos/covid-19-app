import React from "react";
import CountryForm from "../forms/CountryForm";
import { getCountryTimeline } from "../../services/covid-api";
import CountryChart from "../chart/CountryChart";
import Country from "../Country";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

class CountryContainer extends React.Component {
  state = {
    country: "",
    isLoading: false,
    error: false
  };

  handleChange = e => {
    //console.log(e.target.value)
    this.setState({
      country: e.target.value,
      error: false,
      errorMessage: ""
    });
  };

  searchCountry = e => {
    //console.log('Submitting')
    e.preventDefault();
    if (this.state.country.length > 0) {
      this.setState({ isLoading: true });
      getCountryTimeline(this.state.country)
        .then(result => {
          ////console.log(result)
          this.setState({
            isLoading: false,
            timeline: result.data.timeline.map(item => {
              let { confirmed, lastUpdate } = item;
              lastUpdate = lastUpdate.split("-")[2].substring(0, 2);
              return { confirmed, lastUpdate };
            }),
            lastStats: result.data.timeline[result.data.timeline.length - 1]
          });
          //console.log(this.state.timeline)
        })
        .catch(error => {
          //console.log(error)
          this.setState({
            error: true,
            errorMessage: "No data found for this country",
            isLoading: false
          });
        });
    } else {
      //console.log('error no country')
      this.setState({
        error: true,
        errorMessage: "Enter a country"
      });
    }
  };

  render() {
    return (
      <Container style={containerStyle}>
        <CountryForm
          onChange={this.handleChange}
          onSubmit={this.searchCountry}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
        />
        {this.state.isLoading && (
          <CircularProgress color="secondary" style={progressStyle} />
        )}
        {this.state.timeline && !this.state.isLoading && (
          <Country stats={this.state.lastStats} />
        )}
        {this.state.timeline && !this.state.isLoading && (
          <CountryChart data={this.state.timeline} />
        )}
      </Container>
    );
  }
}

const containerStyle = {
  height: "400px"
};
const progressStyle = {
  padding: "10%"
};

export default CountryContainer;
