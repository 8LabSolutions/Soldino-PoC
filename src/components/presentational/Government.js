import React, {Component} from 'react';
import NavBar from './NavBar'
import { store } from "../../store/index";
import FormGovernment from './FormGovernment';

class Government extends Component {
  render() {
    if(store.getState().logged === false){window.location.href = "/"}
    //need to check if user type is government, else redirect to home like previous line
    return (
      <div>
        <NavBar />
        <h1>Government</h1>
        <FormGovernment />
      </div>
    )
  }
}

export default Government;