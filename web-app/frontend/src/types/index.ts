export type tCoordinates = {
  x: number;
  y: number;
}

export interface iDrawLine {
  c: CanvasRenderingContext2D;
  from: tCoordinates;
  to: tCoordinates;
  color: string;
  size: number;
}