/**
 * Airplane Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-13
 */

class Airplane {
  // Speed field.
  protected speed = 0

  // getter and setter
  setSpeed(speed: number): void {
    this.speed = speed
  }

  getSpeed(): number {
    return this.speed
  }
}

export = Airplane
