import store from "./store";
import * as actions from "./actions";

// store.state = 1;
// console.log(store);

store.subscribe(() => {
  console.log("Store Changed");
});

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
