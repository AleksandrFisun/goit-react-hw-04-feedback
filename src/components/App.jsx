import { useState } from 'react';
import FeedbackOptions from './feedback/Feedback';
import { SectionWrap } from './wrap/SectionWrap';
import Statistics from './statistick/Statistick';
import { AppWrap } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeadback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };
  const totalFeedback = good + bad + neutral;
  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / totalFeedback) * good);
  };

  return (
    <AppWrap>
      <SectionWrap title={'Pleace leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeadback}
        />
      </SectionWrap>
      <SectionWrap title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positive={countPositiveFeedbackPercentage}
          />
        ) : (
          <p>Leave your feedback</p>
        )}
      </SectionWrap>
    </AppWrap>
  );
};
