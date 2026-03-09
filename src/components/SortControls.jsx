function SortControls({ sortField, setSortField, sortOrder, setSortOrder }) {
  return (
    <div className="sort-controls">
      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortControls;