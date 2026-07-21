// SearchBar.jsx

// Reusable search bar component
function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (
    <div className="search-container">

      <input
        type="text"
        className="search-bar"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

// Export component
export default SearchBar;