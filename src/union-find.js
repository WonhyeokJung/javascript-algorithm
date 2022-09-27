// 노드간 구조를 형성하고, 그 결과를 파악할 수 있다.
class UnionFind {
  constructor() {
    this.map = new Map();
  }
  find(x) {
    // 본인을 가리키면 반환
    if (this.map.get(x) === x) {
      return x;
    } else {
      // 아니면 루트노드까지 재귀해서 올라간다.
      return this.find(this.map.get(x));
    }
  }

  // 루트 노드 설정
  union(x, y) {
    if (!this.map.has(x)) this.map.set(x, x);
    if (!this.map.has(y)) this.map.set(y, y);
    // 각자 부모 루트 찾기
    x = this.find(x);
    y = this.find(y);
    
    // 우변 밸류에 좌변키(x) 할당
    this.map.set(this.map.get(y), x)
  }
}

let uni = new UnionFind();
// 2의 루트 노드 => 1
uni.union(1, 2);
uni.union(1, 3);
uni.union(2, 4);
uni.union(5, 6);
console.log(uni.map);