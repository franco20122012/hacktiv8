// Exercise 6 - Damage Calculation
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to multiply all digits in a number using recursion until one digit left
function attack (damage) {
  return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack)
}

// TEST CASE
console.log(damageCalculation(9, 25)) // 207
console.log(damageCalculation(10, 4)) // 20
console.log(damageCalculation(5, 20)) // 90
