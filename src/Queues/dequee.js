class Deque {
  constructor() {
    this.items = [];
  }

  addFront(value) {
    this.items.unshift(value);
  }

  addRear(value) {
    this.items.push(value);
  }

  removeFront() {
    if (this.isEmpty()) return null;

    return this.items.shift();
  }

  removeRear() {
    if (this.isEmpty()) return null;

    return this.items.pop();
  }

  getFront() {
    if (this.isEmpty()) return null;

    return this.items[0];
  }

  getRear() {
    if (this.isEmpty()) return null;

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
