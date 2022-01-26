import React, { Component } from "react";
import Section from "./section/Section";


import FeedbackOptions from './feedbackoptions/FeedbackOptions'
import Statistics from './statistics/Statistics'
import Notification from "./notification/Notification"

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    positivePercentage:0
  };
  static defaultProps  = {
    title: "Please leave feedback",
  };
  onLeaveFeedback = (e) => {
    const step = 1;
    const { name } = e.target;
    this.setState(state => ({
        [name]: state[name] + step
    }));
};
totalFeedback=()=>{
  const {good, neutral, bad}=this.state
  return good+bad+neutral
}
positivePercentage=()=>{
  const {good}=this.state
  const total=this.totalFeedback()
  return Math.round((good*100)/total)
}

  render() {
    const {good, neutral, bad}=this.state
    return (
      <div>
        <Section title={this.props.title}>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        {this.totalFeedback()>0 
        ?(<Statistics good={good} neutral={neutral} bad={bad} total={this.totalFeedback()} positivePercentage={this.positivePercentage()}/>)
        :(<Notification message="There is no feedback"/>)}

        </Section>
      </div>
    );
  }
}
