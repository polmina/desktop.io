import { defaultStore } from "./defaultStore";
function store(state = defaultStore, action) {
  let [verb, entity, index] = action.type.split("/");
  switch (verb) {
    case "set":
      switch (entity) {
        default:
          return { ...state, [entity]: action.value };
      }
    case "add":
      switch (entity) {
        default:
          return { ...state, [entity]: action.value };
      }
    case "update":
      switch (entity) {
        case "apps":
          let apps = state.apps;
          for (let i = 0; i < apps.length; i++) {
            if (index !== "all") i = index;
            let changedApp = { ...apps[i], ...action.value };
            apps[i] = changedApp;
            if (index !== "all") break;
          }
          return { ...state, apps: apps };
        default:
          console.log({
            ...state,
            [entity]: { ...state[entity], ...action.value },
          });
          return { ...state, [entity]: { ...state[entity], ...action.value } };
      }
  }
  return state;
}
export default store;
