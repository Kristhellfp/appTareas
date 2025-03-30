import { tareas } from "./data.js";

function alternarSeleccion() {
    tareas.forEach(textoTarea => {
        const elemento = document.createElement('div');
        elemento.className = 'item-contenedor';

        const casillaVerificacion = document.createElement('input');
        casillaVerificacion.type = 'checkbox';
        casillaVerificacion.className = 'marcador';
        casillaVerificacion.id = `item-${textoTarea}`;

        const etiquetaTarea = document.createElement('label');
        etiquetaTarea.textContent = textoTarea;
        etiquetaTarea.className = 'texto-tarea';
        etiquetaTarea.setAttribute('for', casillaVerificacion.id);

        elemento.addEventListener('click', function() {
            const estado = this.querySelector('.marcador');
            estado.checked = !estado.checked;
            this.classList.toggle('resaltado', estado.checked);
        });

        elemento.appendChild(casillaVerificacion);
        elemento.appendChild(etiquetaTarea);
    });
}

export { alternarSeleccion };