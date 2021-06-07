import { configureStore } from "@reduxjs/toolkit";

import reducer from "./projects";

export default function () {
  const store = configureStore({ reducer });
  return store;
}
