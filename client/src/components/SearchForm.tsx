import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Search by title or description"
        value={searchQuery.title || searchQuery.description}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;