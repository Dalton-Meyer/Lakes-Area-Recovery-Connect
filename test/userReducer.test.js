const userReducer = require('../src/redux/reducers/userReducer')

test('Reducer should return the state with the action.payload when case is SET_USER', () => {
    const result = userReducer([], {type:'SET_USER', payload: 'test'})
    expect(result).toEqual('test')
})

test('Reducer should return empty state when case is UNSET_USER', () => {
    const result = userReducer([], {type:'UNSET_USER'})
    expect(result).toEqual({})
})
