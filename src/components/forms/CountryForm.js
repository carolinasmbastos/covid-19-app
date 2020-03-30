import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const getStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  }
}));

const CountryForm = props => {
  const classes = getStyles();
  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={e => props.onSubmit(e)}
      >
        <TextField
          id="filled-basic"
          label="Country"
          variant="filled"
          onChange={e => props.onChange(e)}
          error={props.error}
          helperText={props.errorMessage}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={e => props.onSubmit(e)}
        >
          Search
        </Button>
      </form>
    </Container>
  );
};

export default CountryForm;
