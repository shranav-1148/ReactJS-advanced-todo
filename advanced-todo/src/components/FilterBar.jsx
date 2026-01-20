import { useState } from "react";

function FilterBar({ onFilterChange }){
    // state for the currently active filter that is changed when another filter is clicked
    const [activeFilter, setActiveFilter] = useState('all');


    const handleClick = (filter) => {
        // changes active filter
        setActiveFilter(filter);
        // changes global filter
        onFilterChange(filter);
    };

    return (
        // Returns a div with three buttons for three filter statuses
        <div>
            {['all', 'active', 'completed'].map((filter) =>(
                <button
                    key={filter}
                    onClick={() => handleClick(filter)}
                    style={{
                        fontWeight: activeFilter === filter ? 'bold' : 'normal',
                        marginRight: '8px'
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;