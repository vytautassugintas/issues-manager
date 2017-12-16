
import {combineReducers} from 'redux'
import issuesReducer from './containers/IssuesPage/reducer';

const issuesStore = combineReducers({
    issuesReducer
});

export default issuesStore;