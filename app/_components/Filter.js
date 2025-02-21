'use client';

export default function Filter() {
  function handleFilter(filter) {}

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-5 hover:bg-primary-700"
        onClick={() => handleFilter('all')}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-5 hover:bg-primary-700"
        onClick={() => handleFilter('small')}
      >
        1&mdash;3 guests
      </button>
      <button
        className="px-5 py-5 hover:bg-primary-700"
        onClick={() => handleFilter('medium')}
      >
        4&mdash;7 guests
      </button>
      <button
        className="px-5 py-5 hover:bg-primary-700"
        onClick={() => handleFilter('large')}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}
