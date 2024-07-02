// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

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

  toArray() {
    return [this.x, this.y]
  }
}

const C = new Vec2(10, 15);
const X = new Vec2(20, 0);
const Z = new Vec2(30, 0);
const HC = Vec2.lli(C, C.plus(0, 10), Z, X); // C projected onto the horizon Z--X.
const dyC = C.y - HC.y; // The y-distance in screen pixels between C and its projection.
const yScale = 5.0; // This determines what height is drawn as "level" to the viewer.
const yFactor = dyC / yScale; // By how much we need to scale world.y to get screen.y?

const PERSPECTIVE_FACTOR = 0.25;


// store final lines here
const finalLines = [];

let p = [
  get(0, 0, 0).toArray(),
  get(1, 0, 0).toArray(),
  get(1, 0, 2).toArray(),
  get(0, 0, 2).toArray(),
  get(0, 0, 0).toArray(),
  get(1, 0, 0).toArray(),
  get(1, 0, 2).toArray(),
  get(0, 0, 2).toArray(),
];

// and then let's draw its wireframe
for (let i = 0; i < 4; i++) {
  finalLines.push(p[i])
  finalLines.push(p[(i + 1) % 4])

  finalLines.push(p[4 + i])
  finalLines.push(p[4 + (i + 1) % 4])

  finalLines.push(p[i])
  finalLines.push(p[4 + i])
  /*
  line(p[i],     p[(i+1)%4]);
  line(p[4 + i], p[4 + (i+1)%4]);
  line(p[i],     p[4 + i]);*/
}

// draw it
drawLines(finalLines);



function stepToDistanceRatio(s) {
  return 1.0 - 1.0 / (1.0 + PERSPECTIVE_FACTOR * s);
}

function get(x, y, z) {

  if (x === 0 && y === 0 && z === 0) return C;

  let px = Vec2.lerp(C, X, stepToDistanceRatio(x));
  let pz = Vec2.lerp(C, Z, stepToDistanceRatio(z));
  let ground = Vec2.lli(X, pz, Z, px);
  if (y == 0) return ground;

  let inZ = (ground.x < C.x);

  let rx = inZ ? (ground.x - Z.x) / (C.x - Z.x) : (X.x - ground.x) / (X.x - C.x);

  let onAxis = Vec2.lli(inZ ? Z : X, C, ground, ground.plus(0, 10));

  let ry = (ground.y - HC.y) / (onAxis.y - HC.y);

  return ground.minus(0, rx * ry * y * yFactor);
}