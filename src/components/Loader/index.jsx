import PropTypes from 'prop-types';
import RingLoader from 'react-spinners/RingLoader';
import { Spinner } from './Loader.styled';

export const Loader = ({ loading }) => {
  return (
    <Spinner>
      <RingLoader color="red" loading={loading} size={120} />
    </Spinner>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};
