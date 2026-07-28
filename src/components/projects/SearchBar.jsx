// SearchBar.jsx


// Search Bar component
function SearchBar({
  value,
  onChange,
  placeholder
}) {


  return (

    <div className="search-bar">


      {/* ==========================
          Search Input
      ========================== */}

      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search portfolio projects"
      />



      {/* ==========================
          Clear Search Button
      ========================== */}

      {value && (

        <button
          type="button"
          onClick={() =>
            onChange({
              target: {
                value: ""
              }
            })
          }
          className="clear-search"
          aria-label="Clear project search"
        >

          Clear

        </button>

      )}


    </div>

  );

}


// Export component
export default SearchBar;