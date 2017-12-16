import { ADD_ISSUE, EDIT_ISSUE, REMOVE_ISSUE } from "./constants";

let nextIssueId = 0;

export const addIssue = issue => ({
  type: ADD_ISSUE,
  id: nextIssueId++,
  issue: issue
});

export const editIssue = issue => ({
  type: EDIT_ISSUE,
  issue: issue
});

export const removeIssue = issueId => ({
  type: REMOVE_ISSUE,
  id: issueId
});
