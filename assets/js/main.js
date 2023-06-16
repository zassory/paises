import { mostrarHora } from "./horas.js";

let pHoraChile = document.getElementById("pHoraChile");
let pHoraFrancia = document.getElementById("pHoraFrancia");
let pHoraLondres = document.getElementById("pHoraLondres");
let pHoraNewYork = document.getElementById("pHoraNewYork");
let pHoraRusia = document.getElementById("pHoraRusia");
let pHoraChina = document.getElementById("pHoraChina");
    



 const mostrarHoraChile = () => {
                
      let divChile = document.getElementById("divChile");
      let hora = mostrarHora('en',{ timeZone: 'America/Santiago' , hour12: false},divChile);

      pHoraChile.innerHTML = hora;
      pHoraChile.style.fontWeight = 'bold';
 }

 setTimeout(mostrarHoraChile,4_000);

 const mostrarHoraFrancia = () => {
    
   let divFrancia = document.getElementById("divFrancia");
   let hora = mostrarHora('fr-FR',{ timeZone: 'Europe/Paris' , hour12: false },divFrancia);

   pHoraFrancia.innerHTML = hora;
   pHoraFrancia.style.fontWeight = 'bold';
 }

 setTimeout(mostrarHoraFrancia,8_000);

 const mostrarHoraLondres = () => {
   
   let divInglaterra = document.getElementById("divInglaterra");
   let hora = mostrarHora('en',{ timeZone: 'Europe/London' , hour12: false },divInglaterra);

   pHoraLondres.innerHTML = hora;
   pHoraLondres.style.fontWeight = 'bold';
 }

 setTimeout(mostrarHoraLondres,12_000);

 const mostrarHoraNewYork = () => {
   
   let divUsa = document.getElementById("divUsa");
   let hora = mostrarHora('en',{ timeZone: 'America/New_York' , hour12: false},divUsa);
        
   pHoraNewYork.innerHTML = hora;
   pHoraNewYork.style.fontWeight = 'bold';    
 }

 setTimeout(mostrarHoraNewYork,16_000);

 const mostrarHoraRusia = () => {   
                
   let divRusia = document.getElementById("divRusia");
   let hora = mostrarHora('en',{ timeZone: 'Europe/Moscow' , hour12: false},divRusia);
    
   pHoraRusia.innerHTML = hora;
   pHoraRusia.style.fontWeight = 'bold';    
 }

 setTimeout(mostrarHoraRusia,20_000);

 const mostrarHoraBeijin = () => {       

   let divChina = document.getElementById("divChina");
   let hora = mostrarHora('en-US',{ timeZone: 'Asia/Shanghai' , hour12: false},divChina);
    
   pHoraChina.innerHTML = hora;
   pHoraChina.style.fontWeight = 'bold';
 }

 setTimeout(mostrarHoraBeijin,24_000);

 const mostrarHoraSeul = () => {
   'en', { timeZone: 'Asia/Seoul', hour12: false }       
   let divCorea = document.getElementById("divCorea");
   let hora = mostrarHora('en',{ timeZone: 'Asia/Seoul' , hour12: false},divCorea);
    
   pHoraSeul.innerHTML = hora;
   pHoraSeul.style.fontWeight = 'bold';
 }

 setTimeout(mostrarHoraSeul,27_000);  