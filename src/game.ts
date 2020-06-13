export class Game {
  private name: string;
  protected description: string;
  protected canvasElement: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D;

  constructor(name: string, canvasId: string) {
    this.name = name;
    this.canvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
  }

  public start() {
    this.context = this.canvasElement.getContext('2d');
    console.log(`Game ${this.name} started...`);
  }

}