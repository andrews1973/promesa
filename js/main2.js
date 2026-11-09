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
const getUsuario = async (name) => {
  const usuarioEncontrado = usuario.find(({ nombre }) => nombre === name);

  if (usuarioEncontrado) {
    return usuarioEncontrado;
  }

  throw new Error(`El usuario con nombre ${name} no existe`);
};

// Pinta la información del usuario
const pintarUsuario = (usuario) => {
  infoUsuarios.innerHTML = `
    <strong>Nombre:</strong> ${usuario.nombre},
    <strong>Correo:</strong> ${usuario.correo}
  `;
};

// Muestra la información del usuario
const mostrarUsurario = async (usuarioBuscado) => {
  try {
    const usuario = await getUsuario(usuarioBuscado);
    pintarUsuario(usuario);
  } catch (error) {
    infoUsuarios.textContent = error.message;
  }
};