class Deque {
  constructor() {
    this.items = [];
  }
  addRear(value) {
    this.items.push(value);
  }
  addFront(value) {
    this.items.unshift(value);
  }
  removeFront() {
    if (this.isEmpty()) return null;

    return this.items.shift();
  }
  removeRear() {
    if (this.isEmpty()) return null;
    this.items.pop();
  }
}
