
import {combineReducers} from 'redux'
import issuesReducer from './containers/IssuesPage/reducer';

const moodyStore = combineReducers({
    issuesReducer
});

export default moodyStore;