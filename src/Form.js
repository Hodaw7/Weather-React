export default function Form() {
  return (
    <form id="search-form">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city"
        id="search-city"
        autocomplete="off"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
      <button type="button" className="btn btn-outline-info" id="current">
        Current location
      </button>
    </form>
  );
}
