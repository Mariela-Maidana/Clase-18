// const todosLosParrafos = document.getElementsByTagName("p")
// console.log(todosLosParrafos)

// const todosLosVerdes = document.getElementsByClassName("verde")
//     //const todosLosVerdes = document.querySelectorAll(".verde")
// console.log(todosLosVerdes)


// //cualquiera de las dos
// //const sextoParrafo = document.querySelector("#borde-rojo")
// const sextoParrafo = document.getElementById("bordej-rojo")
// console.log(sextoParrafo)

// const primerElementoClaseVerde = document.querySelector(".verde")
// console.log(primerElementoClaseVerde.classList)
// primerElementoClaseVerde.classList.remove("verde")


// const primerElementoClaseVerde = document.querySelector(".rojo")
// console.log(primerElementoClaseVerde.classList)
// primerElementoClaseVerde.classList.add("rosa")

// const primerElementoClaseVerde = document.querySelector(".rosa")
// console.log(primerElementoClaseVerde.classList)
// primerElementoClaseVerde.classList.toggle("rosa")

const primerElementoClaseVerde = document.querySelector(".amarillo")
console.log(primerElementoClaseVerde.classList.contains("rojo"))
primerElementoClaseVerde.classList.toggle("rojo")