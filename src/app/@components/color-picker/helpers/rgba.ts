import { BaseColor } from './base-color';

export class Rgba extends BaseColor {
  constructor(public red: number, public green: number, public blue: number, public alpha: number) {
    super();
  }

  public toString(showAlphaChannel: boolean = true): string {
    return showAlphaChannel
      ? `rgba(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()}, ${this.getAlpha()})`
      : `rgb(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()})`
    ;
  }

  public getRed(): number {
    return Math.round(this.red);
  }

  public getGreen(): number {
    return Math.round(this.green);
  }

  public getBlue(): number {
    return Math.round(this.blue);
  }

  public getAlpha(): number {
    return Math.round(this.alpha * 100) / 100;
  }
}
