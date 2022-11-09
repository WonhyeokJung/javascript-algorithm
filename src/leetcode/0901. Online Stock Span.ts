// [Stack]

/**
  Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
  The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.
  For example, if the price of a stock over the next 7 days were [100,80,60,70,60,75,85], then the stock spans would be [1,1,1,2,1,4,6].
  Implement the StockSpanner class:
  StockSpanner() Initializes the object of the class.
  int next(int price) Returns the span of the stock's price given that today's price is price.
*/

// while loop
class StockSpanner {
  public stack: Array<Array<number>>;
  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let ans = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      ans += this.stack.pop()![1];
    }
    this.stack.push([price, ans]);
    return ans;
  }
}

// for loop
class StockSpanner2 {
  public stack: Array<Array<number>>;

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let res:number = 1;
    for (let i = this.stack.length - 1; i > -1; i--) {
      if (price >= this.stack[i][0]) {
        res += this.stack.pop()![1];
        continue;
      }
      break;
    }
    this.stack.push([price, res]);
    return res;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// test case
let obj:StockSpanner = new StockSpanner();
let res:Array<number> = [];
let input:Array<number> = [100, 80, 60, 70, 60, 75, 85];
for (let i = 0; i < input.length; i++) {
  res.push(obj.next(input[i]));
}
console.log('while loop result : ', res);

let obj2:StockSpanner2 = new StockSpanner2();
let res2: Array<number> = [];
for (let i = 0; i < input.length; i++) {
  res2.push(obj2.next(input[i]));
}
console.log('for loop result : ', res2);
