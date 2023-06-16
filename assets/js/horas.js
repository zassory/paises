
export const mostrarHora = (zona,objeto,agrupador) => {    
    
    let fecha = new Date();    
    let fechaLugar = new Date(fecha.getTime());
    let horaLugar = fechaLugar.toLocaleTimeString(zona,objeto);

    let div = document.getElementById(agrupador.id);
    div.classList.remove('d-none');
    div.classList.add('container' ,'d-flex', 'mt-5', 'image-container', 'divChile');
    
    return horaLugar;
}

