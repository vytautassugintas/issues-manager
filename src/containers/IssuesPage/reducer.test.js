import { addIssue, editIssue, removeIssue } from "./actions";
import issuesReducer from "./reducer";

const now = Date.now();
Date.now = jest.genMockFunction().mockReturnValue(now);

describe("Issues reducer", () => {
  it("should add issue to state", () => {
    expect(issuesReducer([], addIssue({ title: "1st issue" }))).toEqual([
      { id: 1, title: "1st issue", createdAt: now }
    ]);
  });
  it("should add second issue to state", () => {
    expect(
      issuesReducer(
        [{ id: 1, title: "1st issue", createdAt: now }],
        addIssue({ title: "2nd issue" })
      )
    ).toEqual([
      { id: 1, title: "1st issue", createdAt: now },
      { id: 2, title: "2nd issue", createdAt: now }
    ]);
  });
  it("should edits issue", () => {
    expect(
      issuesReducer(
        [{ id: 1, title: "1st issue" }],
        editIssue({ id: 1, title: "edited issue" })
      )
    ).toEqual([{ id: 1, title: "edited issue" }]);
  });
  it("should remove one issue by given id", () => {
    expect(
      issuesReducer([{ id: 1, title: "1st issue" }], removeIssue(1))
    ).toEqual([]);
  });
});
