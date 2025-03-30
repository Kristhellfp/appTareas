function generarHeader() {
    const header = document.createElement('header');
    header.className = "header";

    const logo = document.createElement('img');
    logo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffb%2F7d%2Fbd%2Ffb7dbdfcb54df47f9d5b8aa62962df8b.png&f=1&nofb=1&ipt=53b0b84ed8db5283088d6679df5b9a9d17ed2a58ca017319b786ac772333c5f8&ipo=images";
    logo.alt = "logo app";
    logo.className = "logo";
    header.appendChild(logo);


    const nombre = document.createElement('div');
    nombre.className = "nombre";
    nombre.textContent = "Fer";
    header.appendChild(nombre);

    return header;
}

export { generarHeader };