import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below

class Snake {
  public position: Point;
  private direction: string;

  constructor() {
    this.position = new Point(0, 0);
    this.direction = "right";
  }
  turnleft() {
    if (this.direction === "right") {
      this.direction = "up";
    } else if (this.direction === "up") {
      this.direction = "left";
    } else if (this.direction === "left") {
      this.direction = "down";
    } else if (this.direction === "down") {
      this.direction = "right";
    }
  }
  turnright() {
    if (this.direction === "right") {
      this.direction = "down";
    } else if (this.direction === "down") {
      this.direction = "left";
    } else if (this.direction === "left") {
      this.direction = "up";
    } else if (this.direction === "up") {
      this.direction = "right";
    }
  }
  move() {
    if (this.direction === "right") {
      this.position = new Point(this.position.x + 1, this.position.y);
    } else if (this.direction === "left") {
      this.position = new Point(this.position.x - 1, this.position.y);
    } else if (this.direction === "up") {
      this.position = new Point(this.position.x, this.position.y - 1);
    } else if (this.direction === "down") {
      this.position = new Point(this.position.x, this.position.y + 1);
    }
  }
  /*turn(): void {
    if (this.direction === 1) {
      this.direction = -1;
    } else {
      this.direction = 1;
    }
  }
  */
  getposition(): Point {
    return this.position;
  }
}

export default Snake;
