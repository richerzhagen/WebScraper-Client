import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";

export class AddUrl extends Component {
  state = {
    url: ''
  };

  onChange = (e) => this.setState({ url: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addUrl(this.state.url);
    this.setState({ url: '' });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <FormGroup role="form">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add Url ..."
              aria-label="Add Url ..."
              aria-describedby="basic-addon1"
              value={this.state.value}
              onChange={this.onChange}
              style={{flex: '10'}}
            />{" "}
            <Button variant="dark" type="submit" style={{flex: '1'}} >Submit</Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default AddUrl;
