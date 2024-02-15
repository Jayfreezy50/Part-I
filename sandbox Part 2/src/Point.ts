import display from "./display";
class Point {
  private xcoordinate: number = 0;
  private ycoordinate: number = 0;
  constructor(x: number, y: number) {
    this.xcoordinate = x;
    this.ycoordinate = y;
  }
  get x(): number {
    return this.xcoordinate;
  }
  get y(): number {
    return this.ycoordinate;
  }
}
export default Point;
