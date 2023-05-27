import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ handleClick }) => {
  return (
    <div>
      <button className={css.Button} onClick={handleClick} type="button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
