function crearFormulario() {
    const contenedor = document.createElement('div');
    contenedor.className = "contenedor-form";

    const grupoBotones = document.createElement('div');
    grupoBotones.className = "grupo-botones";

    const entrada = document.createElement('input');
    entrada.type = "text";
    entrada.placeholder = "Nueva tarea...";
    entrada.className = "campo-texto"; // ← Clase actualizada

    const boton = document.createElement('button');
    boton.textContent = "Agregar";
    boton.className = "boton-add"; // ← Clase actualizada

    grupoBotones.append(entrada, boton);
    contenedor.appendChild(grupoBotones);

    return contenedor;
}

export { crearFormulario };