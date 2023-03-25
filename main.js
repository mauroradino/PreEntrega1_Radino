let totalAlumnos
let presentes = 0
let ausentes = 0
let ingresados = 1
let i

totalAlumnos = Number(prompt("determine la cantidad total de alumnos"))

    for(let ingresados = 1;ingresados <= totalAlumnos;ingresados++){
      i = prompt(`el alumno ${ingresados} esta (P) presente o (A) ausente?`)
      if(i == 'P'){
        presentes++
      }
      else if (i == 'A'){
        ausentes++
      }}
      let presentismo = (presentes * 100)/totalAlumnos
    console.log(`El numero total de alumnos es: ${totalAlumnos}`)  
    console.log(`hay ${presentes} alumnos presentes`)
    console.log(`hay ${ausentes} alumnos ausentes`)
    console.log(`hay ${presentismo}% de presentismo`)