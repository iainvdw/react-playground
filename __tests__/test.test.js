import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Bar from '../src/app/components/Bar';

describe('Bar', () => {
  it('renders a Bar component', () => {
    const onClick = spy();
    const component = shallow(<Bar onClick={onClick} />);

    component.find('button').simulate('click');

    expect(component.find('h2')).toHaveLength(1);
    expect(component.text()).toContain('Bar');
    expect(onClick.callCount).toEqual(1);
  });
});
