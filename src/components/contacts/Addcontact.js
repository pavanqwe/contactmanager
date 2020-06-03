import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextinputGroup";

import axios from "axios";

class Addcontacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onsubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    //check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone Number is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };
    const res=await axios
      .post("https://jsonplaceholder.typicode.com/users",newContact);
       dispatch({ type: "ADD-CONTACT", payload: res.data });
    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onsubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Addcontacts;
