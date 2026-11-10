const botonInfo = document.querySelector("#botonInfo");
const infoUsuarios = document.querySelector("#infoUsuarios");

// Datos
const usuario = [{ id: 1, nombre: "Andres", correo: "correo@correo.es" }];

const usuarioBuscado = "Andres";

// Evento
botonInfo.addEventListener("click", () => {
    infoUsuarios.textContent = "Buscando usuario...";
    setTimeout(() => mostrarUsurario(usuarioBuscado), 2000);
});

// Busca un usuario y devuelve una promesa
const getUsuario = async (name) => {
    const usuarioEncontrado = usuario.find(({ nombre }) => nombre === name);

    if (usuarioEncontrado) {
        return usuarioEncontrado;
    }

    throw new Error(`El usuario con nombre ${name} no existe`);
};

// Muestra la información del usuario
const mostrarUsurario = async (usuarioBuscado) => {
    try {
        const usuario = await getUsuario(usuarioBuscado); // espera a resolverse la promesa
        pintarUsuario(usuario);
    } catch (error) {
        infoUsuarios.textContent = error.message;
    }
};

// Pinta la información del usuario
const pintarUsuario = (usuario) => { // no desdestructuro esta vez
    infoUsuarios.innerHTML = `
    <strong>Nombre:</strong> ${usuario.nombre},
    <strong>Correo:</strong> ${usuario.correo}
  `;
};
