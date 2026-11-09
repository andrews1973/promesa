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
  const usuarioEncontrado = usuario.find(({ nombre }) => nombre === name);

  return new Promise((resolve, reject) => {
    if (usuarioEncontrado) {
      resolve(usuarioEncontrado); // mando al objeto usuario
    } else {
      reject(`El usuario con nombre ${name} no existe`);
    }
  });
};

let pintarUsuario = (usuario) => {
  infoUsuarios.innerHTML = `
        <strong>Nombre:</strong> ${usuario.nombre},
        <strong>Correo:</strong> ${usuario.correo}
    `;
};

// Muestra la información del usuario
const mostrarUsurario = (usuarioBuscado) => {
  getUsuario(usuarioBuscado)
    .then((usuario) => {
      pintarUsuario(usuario);
    })
    .catch((error) => {
      infoUsuarios.textContent = error;
    });
};
