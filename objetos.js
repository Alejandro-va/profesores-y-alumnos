/* ************************************
 *VARIABLES
 **************************************/
const formulario = document.getElementById("formulario");
const nombre = document.querySelector("input[name='nombre']");
const edad = document.querySelector("input[name='edad");
const rol = document.querySelector("select");
//estudiantes
const articleEstudiante = document.querySelector("#articleEstudiante");
const fragment = document.createDocumentFragment();
const templateEstudiante = document.querySelector("#templateEstudiante");
//profe
const templateProfesor = document.querySelector("#templateProfesor");
const fragment2 = document.createDocumentFragment();
const articleProfesores = document.querySelector("#articleProfesores");
//330
/* ************************************
 *FORMULARIO
 **************************************/
let personas = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  objetoDatos = {
    nombre: nombre.value,
    edad: edad.value,
    rol: rol.value,
    id: Date.now(),
  };
  console.log(objetoDatos.rol == 1 ? true : false);
  personas.push(objetoDatos);

  if (objetoDatos.rol == 2) {
    pintarCardEstudiante();
    console.log(objetoDatos);
  } else {
    pintarCardProfesor();
    //console.log(objetoDatos.rol);
  }
});

/* ************************************
 *PINTAR ESTUDIANTES
 **************************************/
const pintarCardEstudiante = () => {
  articleEstudiante.textContent = "";
  const pintarEstudiante = personas.map((item) => {
    console.log(item);
    const clone = templateEstudiante.content.cloneNode(true);
    clone.querySelector(".card-body #h5").textContent = item.nombre;
    clone.querySelector(".card-body span").textContent = item.edad;

    fragment.appendChild(clone);
  });

  articleEstudiante.appendChild(fragment);
};

/* ************************************
 *PINTAR PROFESOR
 **************************************/
const pintarCardProfesor = () => {
  articleProfesores.textContent = "";
  const pintarProfesor = personas.map((items) => {
    const clone = templateProfesor.content.cloneNode(true);
    clone.querySelector("h5").textContent = items.nombre;
    clone.querySelector("h6").textContent = items.edad;

    fragment2.appendChild(clone);
  });

  articleProfesores.appendChild(fragment2);
};
