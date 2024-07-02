// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// draw it
drawLines(finalLines);







class Vec2 {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  static lerp(a, b, t) {
      return new Vec2(
          a.x + (b.x - a.x) * t,
          a.y + (b.y - a.y) * t
      );
  }


    // line-line intersection
    static lli(l1p1, l1p2, l2p1, l2p2) {
        let a1 = l1p2.y - l1p1.y;
        let b1 = l1p1.x - l1p2.x;
        let c1 = a1 * l1p1.x + b1 * l1p1.y;
        let a2 = l2p2.y - l2p1.y;
        let b2 = l2p1.x - l2p2.x;
        let c2 = a2 * l2p1.x + b2 * l2p1.y;
        let det = a1 * b2 - a2 * b1;
        if (det === 0) {
            return null; // the lines are parallel
        } else {
            let x = (b2 * c1 - b1 * c2) / det;
            let y = (a1 * c2 - a2 * c1) / det;
            return new Vec2(x, y);
        }
    }
  
  plus(dx, dy) {
      return new Vec2(this.x + dx, this.y + dy);
  }

  minus(dx, dy) {
      return new Vec2(this.x - dx, this.y - dy);
  }
}