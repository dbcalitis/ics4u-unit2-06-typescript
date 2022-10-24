/**
 * Jet Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-13
 */

import Airplane from './Airplane'

class Jet extends Airplane {
  // Speed field.
  private readonly MULTIPLIER = 2

  // setter
  setSpeed(speed: number): void {
    super.setSpeed(speed * this.MULTIPLIER)
  }

  accelerate(): void {
    super.setSpeed(super.getSpeed() * 2)
  }
}

export = Jet
