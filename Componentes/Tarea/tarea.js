import { tareas } from './data.js';
import { crearFormulario } from './itemtarea.js';

const guardarTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
};

function crearLista() {
    const lista = document.createElement('div');
    lista.className = "contenedor-lista";


    const titulo = document.createElement('h2');
    titulo.textContent = "Personal";
    titulo.className = "titulo";
    lista.appendChild(titulo);

    const crearItem = (texto) => {
        const item = document.createElement('div');
        item.className = "item-tarea";

        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = "check-tarea";
        check.id = `tarea-${texto.replace(/\s+/g, '-').toLowerCase()}`;

        const textoItem = document.createElement('label');
        textoItem.textContent = texto;
        textoItem.className = "texto-tarea";
        textoItem.htmlFor = check.id;

        item.addEventListener('click', () => {
            check.checked = !check.checked;
            item.classList.toggle('seleccionada', check.checked);
            guardarTareas();
        });

        item.append(check, textoItem);
        return item;
    };

    tareas.forEach(texto => {
        lista.appendChild(crearItem(texto));
    });


    const formulario = crearFormulario();
    const campoTexto = formulario.querySelector('.campo-texto');
    const botonAdd = formulario.querySelector('.boton-add');


    botonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const tarea = campoTexto.value.trim();
        
        if (tarea) {
       
            tareas.push(tarea);
            lista.insertBefore(crearItem(tarea), formulario);
            campoTexto.value = "";
            guardarTareas();
        }
    });

    lista.appendChild(formulario);
    return lista;
}

export { crearLista };