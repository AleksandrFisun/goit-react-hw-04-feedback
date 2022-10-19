import PropTypes from 'prop-types';
import { FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <>
      <FeedbackButton type="button" onClick={onClickGood}>
        Good
      </FeedbackButton>

      <FeedbackButton type="button" onClick={onClickNeutral}>
        Neutral
      </FeedbackButton>

      <FeedbackButton type="button" onClick={onClickBad}>
        Bad
      </FeedbackButton>
    </>
  );
};
FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
