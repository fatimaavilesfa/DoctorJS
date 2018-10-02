import React, {Component, Fragment} from 'react';
import axios from "axios";

class SugarSub extends Component {
    render() {
        return (
            <Fragment>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Before Breackfast">Before Breackfast</option>
                <option value="Before Lunch">Before Lunch</option>
                <option value="Before Dinner">Before Dinner</option>
                <option value="1Hr After Meal">1Hr After Meal</option>
                <option value="2Hrs After Meal">2Hrs After Meal</option>
                <option value="Before Physical Activity">Before Physical Activity</option>
                <option value="During Physical Activity">During Physical Activity"</option>
                <option value="After Physical Activity">After Physical Activity</option>
                <option value="Before Bed">Before Bed</option>
                <option value="Middle of Night">Middle of Night</option>

              </select>
            </Fragment>

        )
    }
}

export default SugarSub;