// (rear + 1) % capacity

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  enqueue(value) {
    if (this.size === this.capacity) {
      return false;
    }

    this.rear = (this.rear + 1) % this.capacity;

    this.items[this.rear] = value;

    this.size++;

    return true;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    let value = this.items[this.front];

    this.items[this.front] = undefined;

    this.front = (this.front + 1) % this.capacity;

    this.size--;

    return value;
  }
  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.items[this.front];
  }
  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}
let queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue);
