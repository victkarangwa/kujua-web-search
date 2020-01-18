import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  Homepage,
  mapStateToProps
} from '../../components/Homepage';
import { homePageProps } from '../../mocks/fileMock';
import rootReducer from '../../redux/reducers';

const middlewares = [thunk];
const testStore = state => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Homepage searchKey={jest.fn()} store={store} />);
  return wrapper;
};

describe('Homepage test suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp({});
    const handleChangeSpy = jest.spyOn(component.instance(), 'handleChange');
    component
      .find('[data-test="search"]')
      .simulate('change', 'ss');
    component.find('[data-test="search-btn"]').simulate('click', {
      preventDefault() {}
    });
    expect(handleChangeSpy).not.toHaveBeenCalled();
  });
  // it('should render spinner', () => {
  //   const wrapper = mount(<ForgotPassword {...spinnerProps} />);
  //   expect(wrapper.find('[data-test="forgotPassword-spinner"]').length).toBe(1);
  // });
  it('should map state to props', () => {
    const initialState = {};
    expect(mapStateToProps(initialState)).toBeDefined();
  });
});