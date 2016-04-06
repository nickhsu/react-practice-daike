import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import FilterItem from '../../components/FilterItem'

function setup() {
    const actions = {
        onItemSelect: expect.createSpy()
    };

    const fixture = {
        id: "id",
        name: 'name',
        groupName: 'groupName'
    };

    const component = shallow(
        <FilterItem id={fixture.id} name={fixture.name} groupName={fixture.groupName}
                    onItemSelect={actions.onItemSelect}/>
    );

    return {
        component: component,
        actions: actions,
        radio: component.find('input').at(0),
        label: component.find('label').at(0),
        fixture: fixture
    }
}

describe('<FilterItem />', () => {
    it('should display correct label', () => {
        const { label, fixture } = setup();

        expect(label.text()).toEqual(fixture.name);
        expect(label.prop('htmlFor')).toEqual(fixture.id);
    });

    it('should display correct radio', () => {
        const { radio, fixture } = setup();

        expect(radio.prop('id')).toEqual(fixture.id);
        expect(radio.prop('name')).toEqual(fixture.groupName);
    });

    it('radio should display call onItemSelect', () => {
        const { radio, actions } = setup();

        radio.simulate('click');
        expect(actions.onItemSelect).toHaveBeenCalled()
    });
});
