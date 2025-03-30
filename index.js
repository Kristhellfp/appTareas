import { generarHeader } from "./Componentes/Header/header.js";
import { crearLista} from "./Componentes/Tarea/tarea.js";

function iniciarAplicacion() {
    const contenedor = document.getElementById('root');
    contenedor.appendChild(generarHeader());
    contenedor.appendChild(crearLista());
}

iniciarAplicacion();