import scrollTopButton from "./boton_scroll.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import { encriptar, desencriptar, ascii } from "./encriptadora_simple.js";
import hamburgerMenu from "./menu_hamburger.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import sorteo from "./sorteo.js";

import { shortcuts, moveBall } from "./teclado_eventos.js";
import darkTheme from "./tema_oscuro.js";
const d = document;
let texto = "nada",
clave;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("assets/SnapSave.io - Kalinka (Dimitri Vegas & Like Mike Edit) (128 kbps).mp3", "#activar-alarma", "#desactivar-alarma")
    scrollTopButton(".scroll-top-btn")
    responsiveMedia(
        `youtube`,
        `(min-width: 1024px)`,
        `<a href="https://www.youtube.com/embed/oR03TvT34uA" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/oR03TvT34uA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

    )
    responsiveMedia(
        `gmaps`,
        `(min-width: 1024px)`,
        `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65222873.31710627!2d-108.38409463664374!3d3.834150949103255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d7ffea7841cd%3A0x2a39e844fb5ea3bf!2sNew%20Haven%20Bilingual%20Bible%20Institute!5e0!3m2!1ses-419!2sar!4v1675783305488!5m2!1ses-419!2sar" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65222873.31710627!2d-108.38409463664374!3d3.834150949103255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d7ffea7841cd%3A0x2a39e844fb5ea3bf!2sNew%20Haven%20Bilingual%20Bible%20Institute!5e0!3m2!1ses-419!2sar!4v1675783305488!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    );
    userDeviceInfo("user-device")
    sorteo("#winner-btn", ".player")
    encriptar("#encriptar-btn", "texto", "clave")
    desencriptar("#desencriptar-btn", "codigo", "llave")
    ascii("#ascii-btn", "numero", "caracter")
} )

d.addEventListener("keydown", (e) => {
    shortcuts(e)
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
// function sorte0o() {
//     let prueba = [1,2,3,4,5,6,7,8,9]
//     let randomIndex = Math.random().floor() * prueba.length
//     console.log(randomIndex)
// }

/*// Selecciona cada elemento completo de cada nota
document.querySelectorAll(".IZ65Hb-TBnied").forEach(function(el){console.log(el)})

// Selecciona título y texto de cada nota
document.querySelectorAll(".fmcmS-x3Eknd").forEach(function(el){console.log(el.innerText)})

// Selecciona etiqueta de cada nota
document.querySelectorAll(".XPtOyb-fmcmS").forEach(function(el){console.log(el.innerText)})

// Selecciona texto de cada nota
document.querySelectorAll(".h1U9Be-YPqjbf").forEach(function(el){console.log(el.innerText)})

// Selecciona título de cada nota
document.querySelectorAll(".r4nke-YPqjbf").forEach(function(el){console.log(el.innerText)})


document.querySelectorAll("div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd").forEach(function(el){
  if (el.classList.contains("r4nke-YPqjbf")) {
    console.log(el);
  }
});

document.querySelectorAll("div.IZ65Hb-s2gQvd").forEach(function(el){
  if (el.classList.contains("r4nke-YPqjbf")) {
    console.log(el);
  }
});

div.parent-class1 div.parent-class2 div.child-class {
   CSS styles for the targeted div element 
}

document.querySelectorAll("div.IZ65Hb-r4nke-haAclf ").forEach(function(el){
  let $titulo = document.querySelector
  
  el.classList.forEach(function(className) {
    if (className === "r4nke-YPqjbf") {
      console.log(className);
    }
  });
});

document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-r4nke-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.r4nke-YPqjbf")[0]
document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-r4nke-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.r4nke-YPqjbf").forEach(function(el){console.log(el.innerText )})
document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-qJTHM-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf").forEach(function(el){console.log(el.innerText)})

IZ65Hb-s2gQvd

IZ65Hb-r4nke-haAclf
notranslate IZ65Hb-YPqjbf fmcmS-x3Eknd r4nke-YPqjbf

IZ65Hb-qJTHM-haAclf
notranslate IZ65Hb-YPqjbf fmcmS-x3Eknd h1U9Be-YPqjbf

function obtenerTextoYTítulo(){
  let $titulos = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-r4nke-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.r4nke-YPqjbf")].map(function(el){return el.innerText})
  let $texto = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-qJTHM-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf")].map(function(el){return el.innerText})

  for (let i = 0; i < $titulos.length; i++) {
    console.log($titulos[i] + "\n - \n" + $texto[i])
    
  }
}
function desencriptar(texto, clave) {

      let claveValue = clave.split("").reduce((result, el) => {
          return result + el.charCodeAt(0)
      }, 0)
      
      let code = texto.split("").map((el) => {
          let finalValue = el.charCodeAt(0) - claveValue
          return String.fromCharCode(finalValue)
      }).join("")

      return code;

}
function obtenerTextoYDescodificarlo(clave){
  let $titulos = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-r4nke-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.r4nke-YPqjbf")].map(function(el){return el.innerText})
  let $texto = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-qJTHM-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf")].map(function(el){return el.innerText})

  for (let i = 1; i < $titulos.length; i++) {
    console.log($titulos[i] + "\n - \n" + desencriptar($texto[i], clave) )
    
  }
}

let $textoActual = document.querySelector("body > div.VIpgJd-TUo6Hb.XKSfm-L9AdLc.eo9XGd > div > div.IZ65Hb-TBnied.oq6NAc-h1U9Be-hxXJme > div.IZ65Hb-s2gQvd > div.IZ65Hb-qJTHM-haAclf > div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf").innerText


function encriptar(texto, clave) {

  let claveValue = clave.split("").reduce((result, el) => {
      return result + el.charCodeAt(0)
  }, 0)
  
  let code = texto.split("").map((el) => {
      let finalValue = el.charCodeAt(0) - claveValue
      return String.fromCharCode(finalValue)
  }).join("")

  return code;

}


*/