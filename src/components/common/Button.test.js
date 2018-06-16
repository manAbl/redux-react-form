import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Button from './Button';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('allows us to set props', () => {

    const onClick = sinon.spy();
    const wrapper = mount(
      <Button className="btn"
        disabled={false} value='something' type="submit" onClick={onClick} />
    );

    expect(wrapper.props().className).toEqual('btn');
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.props().value).toEqual('something');
    expect(wrapper.props().type).toEqual('submit');
    expect(wrapper.props().onClick).toEqual(onClick);
  });

  it('let us call click events', () => {

    const onClick = sinon.spy();
    const wrapper = mount ((
      <Button className="btn"
        disabled='false' value='something' type="submit" onClick={onClick} />
    ));

    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
