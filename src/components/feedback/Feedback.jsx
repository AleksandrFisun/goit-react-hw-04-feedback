import PropTypes from 'prop-types';
import { FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => (
        <FeedbackButton key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </FeedbackButton>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
export default FeedbackOptions;
