import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CounterButtons } from '.';

const sel = (id: string) => {
  return `[data-test="${id}"]`;
};

let mockIncrement: any;
let mockDecrement: any;
let mockAsyncIncrement: any;

beforeEach(() => {
  mockIncrement = jest.fn();
  mockDecrement = jest.fn();
  mockAsyncIncrement = jest.fn();
});

test('should render self with initial state', () => {
  const wrapper = shallow(
    <CounterButtons
      increment={mockIncrement}
      decrement={mockDecrement}
      asyncIncrement={mockAsyncIncrement}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call increment button click', () => {
  const wrapper = shallow(
    <CounterButtons
      increment={mockIncrement}
      decrement={mockDecrement}
      asyncIncrement={mockAsyncIncrement}
    />,
  );
  wrapper.find(sel('increment-button')).simulate('click');
  expect(mockIncrement.mock.calls.length).toEqual(1);
});

test('should call decrement button click', () => {
  const wrapper = shallow(
    <CounterButtons
      increment={mockIncrement}
      decrement={mockDecrement}
      asyncIncrement={mockAsyncIncrement}
    />,
  );
  wrapper.find(sel('decrement-button')).simulate('click');
  expect(mockDecrement.mock.calls.length).toEqual(1);
});

test('should call asyncIecrement button click', () => {
  const wrapper = shallow(
    <CounterButtons
      increment={mockIncrement}
      decrement={mockDecrement}
      asyncIncrement={mockAsyncIncrement}
    />,
  );
  wrapper.find(sel('async-increment-button')).simulate('click');
  expect(mockAsyncIncrement.mock.calls.length).toEqual(1);
});
