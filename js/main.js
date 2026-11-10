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

// Muestra la información del usuario, invocamos la funcion
const mostrarUsurario = (usuarioBuscado) => {
    getUsuario(usuarioBuscado) // esta funcion devuelve una promesa
        .then((usuario) => {
            pintarUsuario(usuario);
        })
        .catch((error) => {
            infoUsuarios.textContent = error;
        });
};

let pintarUsuario = ({nombre, correo}) => {
    infoUsuarios.innerHTML = ""
    infoUsuarios.innerHTML = `
        <strong>Nombre:</strong> ${nombre},
        <strong>Correo:</strong> ${correo}
    `;
};
