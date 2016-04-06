import React, { PropTypes } from 'react'
import FilterGroup from './FilterGroup'

const Filter = ({ members, onMemberSelect, apps, onAppSelect }) => (
    <div>
        <FilterGroup title='指派給' items={members} onItemSelect={onMemberSelect} />
        <FilterGroup title='App' items={apps} onItemSelect={onAppSelect} />
    </div>
);

Filter.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMemberSelect: PropTypes.func.isRequired,
    apps: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onAppSelect: PropTypes.func.isRequired
};

export default Filter