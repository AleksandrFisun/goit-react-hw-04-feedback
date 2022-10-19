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
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};
export default FeedbackOptions;
