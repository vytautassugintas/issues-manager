import { addIssue, editIssue, removeIssue } from "./actions";
import issuesReducer from "./reducer";

describe("Issues reducer", () => {
  it("should add issue to state", () => {
    expect(reducer(undefined, addIssue({ title: "1st issue" }))).toEqual([
      { id: 0, title: "1st issue" }
    ]);
  });
  it("should add second issue to state", () => {
    expect(
      reducer([{ id: 0, title: "1st issue" }], addIssue({ title: "2nd issue" }))
    ).toEqual([{ id: 0, title: "1st issue" }, { id: 1, title: "2nd issue" }]);
  });
  it("should edits issue", () => {
    expect(
      reducer(
        [{ id: 0, title: "1st issue" }],
        editIssue({ id: 0, title: "edited issue" })
      )
    ).toEqual([{ id: 0, title: "edited issue" }]);
  });
  it("should remove one issue by given id", () => {
    expect(reducer([{ id: 0, title: "1st issue" }], removeIssue(0))).toEqual(
      []
    );
  });
});
