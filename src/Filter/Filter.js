import s from "./Filter.module.css";

function Filter({ onChange }) {
  function onFilter(e) {
    onChange(e.target.value);
  }
  return (
    <div className={s.filter}>
      <p>Find contacts by name</p>
      <input placeholder="search..." onChange={onFilter}></input>
    </div>
  );
}
export default Filter;
