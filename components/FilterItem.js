import React, { PropTypes } from 'react'

const FilterItem = ({ id, name, groupName, onItemSelect }) => (
    <li>
        <input id={id} onClick={onItemSelect} type="radio" name={groupName} />
        <label htmlFor={id}>{name}</label>
    </li>
);

FilterItem.propTypes = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    groupName: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired
};

export default FilterItem