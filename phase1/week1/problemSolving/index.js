// Exercise 1 - Problem Solving
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
================================================================
PSEUDOCODE:
-----------
FUNCTION 'scheduleFitness' with parameter 'member' and 'startDate'
  SET 'result' as an object with empty value
  SET 'printResult' with empty string
  FOR each index of 'date' DO
    SET 'memberLogin' as empty array
    IF current index 'date' value modulus with 5 is EQUAL to 0 THEN
      SET 'result' object of the current 'date' key with value of 'Tempat Fitness Tutup'
    ELSE IF current 'date' is EQUAL to 'startDate' THEN
      FOR each 'member' elements DO
        Add the 'member' key 'name' value to 'memberLogin' array
      END FOR
      SET 'result' object of the current 'date' key with value of 'memberLogin' that has been changed to string
    ELSE
      FOR each 'member' elements DO
        IF ('date' minus 'startdate') modulus with 'member' current element of key 'frequency' EQUAL to 0 THEN
          Add the 'member' key 'name' value to 'memberLogin' array
        END IF
      END FOR
      SET 'result' object of the current 'date' key with value of 'memberLogin' that has been changed to string
    END IF
  END FOR
  FOR each key in the 'result' object
    STORE `key: result[key]` in the 'printResult' string
  END FOR
  DISPLAY 'printResult'
ENDFUNCTION
================================================================
*/

// Create function to calculate member schedule
function scheduleFitness (member, startDate) {
  // Create an object for the result and a variable string to print the result
  let result = {}
  let printResult = ''
  // Initiate the initial empty schedule
  for (let date = startDate; date <= 31; date++) {
    let memberLogin = []
    // Fitness closed every multiplication of 5
    if (date % 5 === 0) {
      result[`Tanggal ${date}`] = 'Tempat Fitness Tutup'
    } else if (date === startDate) {
      for (let j = 0; j < member.length; j++) {
        memberLogin.push(member[j].name)
      }
      result[`Tanggal ${date}`] = memberLogin.join(', ')
    } else {
      for (let j = 0; j < member.length; j++) {
        if ((date - startDate) % member[j].frequency === 0) {
          memberLogin.push(member[j].name)
        }
      }
      result[`Tanggal ${date}`] = memberLogin.join(', ')
    }
  }
  // Store the result into string
  for (let key in result) {
    printResult += `${key}: ${result[key]}\n`
  }
  return printResult
}

// TEST CASE
const member = [
  { name: 'Tono', frequency: 2 },
  { name: 'Anton', frequency: 4 },
  { name: 'Budi', frequency: 5 }
]

console.log(scheduleFitness(member, 7))
