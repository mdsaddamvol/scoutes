import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

import FormuserSocial from './FormuserSocial';
import Navbar from './navbar';
import { saveProfile } from '../firebase/firebase-config';

export class UserForm extends Component {
  state = {
    step: 1,
    fullName: '',
    overview: '',
    email: '',
    phone: '',
    overview: '',
    school: '',
    grade: '',
    gpa: '',
    sat: '',
    cochenote: '',
    stats: '',
    facebook: '',
    tweeter: '',
    instagram: '',
    youtube: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };
  handleSubmit = () => {
    const {
      fullName,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    } = this.state;
    const values = {
      fullName,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    };
    saveProfile(this.props.uid, values);
  };

  render() {
    const { step } = this.state;
    const {
      fullName,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    } = this.state;
    const values = {
      fullName,
      email,
      phone,
      overview,
      school,
      grade,
      gpa,
      sat,
      coachesnote,
      stats,
      facebook,
      tweeter,
      instagram,
      youtube,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            uid={this.props.uid}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormuserSocial
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm nextStep={this.nextStep} prevStep={this.prevStep} handleSubmit={this.handleSubmit} values={values} />
        );
      case 5: {
        this.handleSubmit();
        return <Success id={this.props.uid} />;
      }

      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default UserForm;
