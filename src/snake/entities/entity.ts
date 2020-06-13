import { Position } from '../interface/position';
import { Size } from '../interface/size';

export class Entity {
  public position: Position;
  public size: Size;
  public backgroundColor: string;

  constructor(backgroundColor?: string) {
    this.backgroundColor = backgroundColor;
  }

  public setPosition(x: number, y: number) {
    this.position = { x, y };
  }

  public setSize(width: number, height: number) {
    this.size = { width, height };
  }
}
