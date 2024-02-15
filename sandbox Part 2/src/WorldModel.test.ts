import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";
const snake1 = new Snake();
const world = new WorldModel(snake1);
console.log(world);
world.update(3);
console.log(world);
snake1.turnleft();
world.update(3);
console.log(world);
expect(snake1.position.x).toBe(3);

export {};
