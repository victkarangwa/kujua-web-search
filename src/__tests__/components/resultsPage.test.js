import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import Results from '../../components/Results';
 import { resultsPageProps } from '../../mocks/fileMock';
import rootReducer from '../../redux/reducers';

const middlewares = [thunk];
const testStore = state => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, state);
};


describe('Results page test suite', () => {
  it('Should Mount Successfully', () => {
          const store = testStore({});
    const input = mount(
      <Router>
        <Results {...resultsPageProps} store={store} />
      </Router>
    );
    const searchSection = input.find("input").at(0);
    const resultSection = input.find('input').at(1);
    searchSection.simulate('change', { target: { value: 'js' } });
    resultSection.simulate('click');
  });
});
