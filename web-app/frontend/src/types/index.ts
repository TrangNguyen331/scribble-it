export type tCoordinates2D = {
  x: number;
  y: number;
}

export interface iDrawLine {
  c: CanvasRenderingContext2D;
  from: tCoordinates2D;
  to: tCoordinates2D;
  color: string;
  size: number;
}