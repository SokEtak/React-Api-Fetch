import { useState } from "react";

function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");
  const handleChange = (evt) => {
    evt.preventDefault();
    setTerm(evt.target.value);
  };
  const handleSubmit = () => {
    search(term);
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={term} />
      <button>Search</button>
    </form>
  );
}

export default ProfileSearchForm;
