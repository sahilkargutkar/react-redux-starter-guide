import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addBug } from "../bugs";
import { configureStore } from "../ConfigureStore";

// describe("bugsSlice", () => {
//   describe("action creators", () => {
//     it("addBug", () => {
//       const bug = { description: "a" };
//       const result = addBug(bug);

//       const expected = {
//         type: apiCallBegan.type,
//         payload: {
//           url: "/bugs",
//           method: "post",
//           data: bug,
//           onSuccess: bugAdded.type,
//         },
//       };
//       expect(result).toEqual(expected);
//     });
//   });
// });

// describe("bugSlice", () => {
//   it("should handle the addBug actiion ", async () => {
//     const store = configureStore();
//     const bug = { description: "a" };
//     await store.dispatch(addBug(bug));
//     console.log(store.getState());
//   });
// });

describe("bugSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSLice = () => store.getState().entities.bugs;

  it("should handle the addBug action ", async () => {
    const bug = { description: "a" };
    // const savedBug = { ...bug, id: 1 };

    fakeAxios.onPost("/bugs").reply(500, savedBug);

    await axios.dispatch(addBug(bug));
    expect(bugsSLice().list).toHaveLength(1);
  });
});
