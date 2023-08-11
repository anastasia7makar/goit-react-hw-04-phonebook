import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

const Filter = ({ value, handleChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
      className={css.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
