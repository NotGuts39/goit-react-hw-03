import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>Find contact by name</label>
      <input
        type="text"
        id="search"
        placeholder=""
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;