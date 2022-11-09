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
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
