class OptimizedQueue {
  constructor() {
    this.items = [];
    this.front = 0;
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.items[this.front];

    this.front++;

    return value;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }
  isEmpty() {
    return this.front >= this.items.length;
  }

  size() {
    return this.items.length - this.front;
  }
}
let queue = new OptimizedQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front);

console.log(queue.dequeue()); // 10

console.log(queue.dequeue()); // 20

console.log(queue.peek()); // 30
console.log(queue.size()); // 1
console.log(queue.isEmpty()); // false
