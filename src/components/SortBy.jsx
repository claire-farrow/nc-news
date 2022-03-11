export const SortBy = ({
    setSortBy,
    selectedSort,
    setOrderBy,
    selectedOrder
}) => {
    const handleChangeSort = (event) => {
        setSortBy(event.target.value)
    }
    const handleChangeOrder = (event) => {
        setOrderBy(event.target.value)
    }

    return (
        <div>
            <label className="sort">Sort By:
            <select className="optionBox" value={selectedSort} onChange={handleChangeSort}>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="author">Author</option>
            </select>
            </label>
            <label className="sort">Order By:
            <select className="optionBox" value={selectedOrder} onChange={handleChangeOrder}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            </label>
        </div>
    )
}