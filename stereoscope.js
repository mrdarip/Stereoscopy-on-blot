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

  plus(dx, dy) {
      return new Vec2(this.x + dx, this.y + dy);
  }

  minus(dx, dy) {
      return new Vec2(this.x - dx, this.y - dy);
  }
}