import { BaseColor } from './base-color';

export class Cmyk extends BaseColor {
  constructor(public cyan: number, public magenta: number, public yellow: number, public black: number) {
    super();
  }

  public toString(): string {
    return `cmyk(${this.getCyan()}%, ${this.getMagenta()}%, ${this.getYellow()}%, ${this.getBlack()}%)`;
  }

  public getCyan() {
    return Math.round(this.cyan);
  }

  public getMagenta() {
    return Math.round(this.magenta);
  }

  public getYellow() {
    return Math.round(this.yellow);
  }

  public getBlack() {
    return Math.round(this.black);
  }
}
