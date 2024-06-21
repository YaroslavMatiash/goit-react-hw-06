import css from './SearchBox.module.css'

import { useId } from 'react';

function SearchBox({ value, onSearch }) {
   const filterFieldId = useId();

   return (
        <div className={css.searchForm}>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={filterFieldId}
        value={value}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
   )
};

export default SearchBox;