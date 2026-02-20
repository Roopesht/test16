import { useState } from 'react';
import data from './data.json';
import './PeopleSearch.css';

function PeopleSearch() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = data.filter(({ firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`.toLowerCase();
    return fullName.includes(query.toLowerCase());
  });

  const handleCardClick = (person) => {
    setSelected(selected?.firstName === person.firstName && selected?.lastName === person.lastName ? null : person);
  };

  return (
    <div className="people-search">
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="people-search__input"
      />
      <div className="people-search__grid">
        {filtered.map((person, idx) => (
          <div
            key={idx}
            className={`people-card ${selected?.firstName === person.firstName && selected?.lastName === person.lastName ? 'people-card--selected' : ''}`}
            onClick={() => handleCardClick(person)}
          >
            <h3>{person.firstName} {person.lastName}</h3>
            <p>{person.speciality}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="people-search__empty">No results found.</p>
      )}
    </div>
  );
}

export default PeopleSearch;
