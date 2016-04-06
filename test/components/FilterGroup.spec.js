import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import FilterGroup from '../../components/FilterGroup'

function setup() {
    const actions = {
        onItemSelect: expect.createSpy()
    };

    const fixture = {
        title: "title",
        items: [
            {
                id: 'id-1',
                name: 'name-1'
            },
            {
                id: 'id-2',
                name: 'name-2'
            }
        ]
    };

    const component = shallow(
        <FilterGroup title={fixture.title} items={fixture.items} onItemSelect={actions.onItemSelect}/>
    );

    return {
        component: component,
        actions: actions,
        title: component.find('h2').at(0),
        filterItems: component.find('FilterItem'),
        fixture: fixture
    }
}

describe('<FilterGroup />', () => {
    it('should display correct title', () => {
        const { title, fixture } = setup();

        expect(title.text()).toEqual(fixture.title);
    });

    it('should render children', () => {
        const { filterItems, fixture } = setup();

        expect(filterItems.length).toEqual(fixture.items.length);
    });
});
