create and import store in index.js

```
import { createStore }  from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App/></Provider>)
```

Folder layout

- src
  - store
    - reducer.js
    - action.js

### reducer.js

```
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state, counter++
            }
        default:
            return state
    }

    return state
}

export default reducer;
```

### counter.js

```
import {Connect} from 'react-redux'

const mapStateToProps = state =>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    }
}

export default(mapStateToProps, mapDispatchToProps)(Counter)
```

### action.js

```
const ADD_ITEM = 'ADD_ITEM'
```

### combining reducers

```import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})
```
