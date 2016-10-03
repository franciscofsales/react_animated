
export const stateChangeHandler = function(name) {
  return (function(text) {
    var state = {};
    state[name] = text;
    this.setState(state);
  }).bind(this);
}
