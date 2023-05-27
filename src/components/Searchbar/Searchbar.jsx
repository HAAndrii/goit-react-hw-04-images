import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { MdOutlineSearch } from 'react-icons/md';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() !== '') {
      onSubmit(value);
    }
    setValue('');
  };

  return (
    <div>
      <header className={css.search_bar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <MdOutlineSearch className={css.SearchForm_icon} />
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
