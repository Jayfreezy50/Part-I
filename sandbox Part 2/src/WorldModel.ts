import display from "./display";
import Point from "./Point";
import Snake from "./Snake";
class WorldModel {
  private _snake: Snake;
  private _height: number;
  private _width: number;

  constructor(snake: Snake, worldHeight: number = 10, worldWidth: number = 10) {
    this._snake = snake;
    this._height = worldHeight;
    this._width = worldWidth;
  }
  update(steps: number) {
    this._snake.move();
  }

  public getSnake(): Snake {
    return this._snake;
  }
  public getHeight(): number {
    return this._height;
  }
  public getWidth(): number {
    return this._width;
  }
}
export default WorldModel;
