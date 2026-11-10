const botonInfo = document.querySelector("#botonInfo");
const infoUsuarios = document.querySelector("#infoUsuarios");

// Datos
const usuario = [{ id: 1, nombre: "Andres", correo: "correo@correo.es" }];

const usuarioBuscado = "Andres";

// Evento
botonInfo.addEventListener("click", () => {
  mostrarUsurario(usuarioBuscado);
});

// Busca un usuario y devuelve una promesa
const getUsuario = (name) => {
  infoUsuarios.textContent = "Buscando usuario...";  
  const usuarioEncontrado = usuario.find(({ nombre }) => nombre === name);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
    infoUsuarios.textContent = "Buscando usuario...";
      if (usuarioEncontrado) {
        resolve(usuarioEncontrado); // mando al objeto usuario
      } else {
        reject(`El usuario con nombre ${name} no existe`);
      }
    }, 2000);
  });
};

// Muestra la información del usuario, invocamos la funcion
const mostrarUsurario = (usuarioBuscado) => {
  getUsuario(usuarioBuscado) // esta funcion devuelve una promesa
    .then((usuario) => {
      // recibe usuarioEncontrado
      pintarUsuario(usuario);
    })
    .catch((error) => {
      infoUsuarios.textContent = error;
    });
};

let pintarUsuario = ({ nombre, correo }) => {
  // desectructurado
  infoUsuarios.innerHTML = "";
  infoUsuarios.innerHTML = `
        <strong>Nombre:</strong> ${nombre},
        <strong>Correo:</strong> ${correo}
    `;
};
