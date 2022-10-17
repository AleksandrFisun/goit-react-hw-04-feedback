import { Component } from 'react';
import FeedbackOptions from './feedback/Feedback';
import { SectionWrap } from './wrap/SectionWrap';
import Statistics from './statistick/Statistick';
import { AppWrap } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOption = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(((total - bad) / total) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positive = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (
      <AppWrap>
        <SectionWrap title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementOption}
          />
        </SectionWrap>
        <SectionWrap title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <p>Leave your feedback</p>
          )}
        </SectionWrap>
      </AppWrap>
    );
  }
}
