/**
 * This is FlyTest.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-21
 */

import Airplane from './Airplane'
import Jet from './Jet'

const biplane = new Airplane()
biplane.setSpeed(212)
console.log(biplane.getSpeed())

const boeing = new Jet()
boeing.setSpeed(422)
console.log(boeing.getSpeed())
let x = 0

while (x < 4) {
  boeing.accelerate()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.accelerate()
  }
  x++
}

console.log(biplane.getSpeed())

console.log('\nDone.')
