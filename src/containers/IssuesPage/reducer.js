import { ADD_ISSUE, EDIT_ISSUE, REMOVE_ISSUE } from "./constants";

const initialState = [
  {
    id: 25,
    title: "1st Issue",
    description: "Something is wrong",
    createdAt: Date.now()
  }
];

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [
        ...state,
        Object.assign(action.issue, {
          id: action.id,
          createdAt: Date.now()
        })
      ];
    case EDIT_ISSUE:
      return state.map(issue => {
        if (issue.id !== action.issue.id) {
          return issue;
        }
        return Object.assign(issue, action.issue);
      });
    case REMOVE_ISSUE:
      return state.filter(issue => issue.id !== action.id);
    default:
      return state;
  }
};

export default issuesReducer;
