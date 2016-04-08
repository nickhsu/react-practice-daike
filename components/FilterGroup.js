import React, { PropTypes } from 'react'
import FilterItem from './FilterItem'

const FilterGroup = ({ title, items, onItemSelect }) => (
    <div className='filter-group'>
        <h2>{title}</h2>
        <form>
            <ul>
                {items.map(item =>
                    <FilterItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        groupName={title}
                        onItemSelect={() => onItemSelect(item.id)}
                    />
                )}
            </ul>
        </form>
    </div>
);

FilterGroup.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onItemSelect: PropTypes.func.isRequired
};

export default FilterGroup