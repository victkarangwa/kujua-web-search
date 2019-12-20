import reducers from '../redux/reducers';

test('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({ queries: [] });
});