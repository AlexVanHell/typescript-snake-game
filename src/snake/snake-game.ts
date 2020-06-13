import { Game } from '../game';
import { Apple } from './entities/apple';
import { Snake } from './entities/snake';
import { GameArea } from './game-area';

export class SnakeGame extends Game {
  constructor(canvasId: string) {
    super('Snake', canvasId);
  }

  public start() {
    super.start();
    const gameArea = new GameArea('#000000');
    const snake = new Snake('#FFFFFF');
    const apple = new Apple('#FF0000');

    gameArea.setPosition(0, 0);
    gameArea.setSize(400, 400);
    this.context.fillStyle = gameArea.backgroundColor;
    this.context.fillRect(
      gameArea.position.x,
      gameArea.position.y,
      gameArea.size.width,
      gameArea.size.height
    );

    snake.setPosition(200, 4);
    apple.setPosition(5, 90);

    console.log(snake.position);
    console.log(apple.position);
  }

  /* public setDescription(description: string) {
    this.description = description;
  } */
}