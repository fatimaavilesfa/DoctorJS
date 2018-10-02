import React from "react";
//import $ from "jquery";
import axios from "axios";

class SugarSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      When: "",
      Glucose: ""
    };
    
    this.handleWhen = this.handleWhen.bind(this);
    this.handleGlucose = this.handleGlucose.bind(this);
    this.submitLevel = this.submitLevel.bind(this);
   
  }

  handleWhen(e) {
    e.preventDefault();
    this.setState({
      When: e.target.value
    });
  }

  handleGlucose(e) {
    e.preventDefault();
    this.setState({
      Glucose: e.target.value
    });
  }

 

 

  addItem(When, Glucose) {
    $.ajax({
    url:'/items',
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      name: When,
      descrip: Glucose,
      
    }),
    success:(data)=> {
    },
    error: (xhr,status,error) => {
    }
  });
}
   

  submitItem(event) {
    event.preventDefault();
    this.addItem(this.state.When, this.state.Glucose);

    this.setState({
      When: "",
      Glucose: ""
    });
    alert('Success!')
  }

  submitLevel(event) {
    event.preventDefault();
    this.addItem(this.state.When, this.state.Glucose);
    this.setState({
        When: "",
        Glucose: ""
      });
      alert('Success!')
    }


  render() {
    return (
      <div>
      <h4>When:
      <select value={this.state.When} onChange={this.handleWhen}>
        
        <option>Before Breakfast</option>
        <option>Before Lunch</option>
        <option>Before Dinner</option>
        <option>1Hr.After Meal</option>
        <option>2Hrs. After Meal</option>
        <option>Before Physical Activity</option>
        <option>During Physical Activity</option>
        <option>After Physical Activity</option>
        <option>Before Bed</option>
        <option>Middle of Night</option>
        <option>Other</option>
          
    </select>
        </h4>
        <br />
        <h4>Glucose Level:
        <input
          value={this.state.Glucose}
          placeholder=""
          onChange={this.handleGlucose}
        /></h4>
        <button onClick={this.submitLevel}>Submit</button>

      </div>
    );
  }
}

export default SugarSub;