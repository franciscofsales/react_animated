'use strict'

var Animation = {
  init(data, ix, iy, px, py, scaling=0.60) {
    this.data = data;
    this.ix = ix;
    this.iy = iy;
    this.px = px;
    this.py = py;
    this.scaling = scaling;
    this._events = [];
    return this;
  },
  to(x, y) {
    if(typeof x === 'string')
      this._events.push({special:x})
    else
      this._events.push({toValue:{x, y}})
    return this;
  },
  in(duration) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].duration = duration;
    return this;
  },
  ease(easing) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].easing = easing;
    return this;
  },
  delay(duration) {
    if(this._events.length > 0)
      this._events[this._events.length - 1].delay = duration;
    return this;
  }
};

function createAnim(letter, ix, iy, px, py, scaling) {
  return Object.create(Animation).init(letter, ix, iy, px, py, scaling);
}

module.exports = {Animation, createAnim};
