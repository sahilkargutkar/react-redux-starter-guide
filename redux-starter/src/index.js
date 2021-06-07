import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("Bug 2"));

unsubscribe();

store.dispatch(bugResolved(1));

console.log(store.getState());
