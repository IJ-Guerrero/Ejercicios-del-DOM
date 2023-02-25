const d = document;

export function encriptar(encriptarBtn, texto, clave) {
    
    

    d.addEventListener("click", e => {

        if (e.target.matches(encriptarBtn)) {
            let textoPuro,
            clavePura;
            textoPuro = d.getElementById(texto).value
            clavePura = d.getElementById(clave).value
            

            let claveValue = clavePura.split("").reduce((result, el, i, array) => {
                return result + el.charCodeAt(0)
            }, 0)
            
            
            let code = textoPuro.split("").map((el) => {
                let finalValue = el.charCodeAt(0) +  claveValue
                return String.fromCharCode(finalValue)
            }).join("")
            

            // d.getElementById("encriptado").innerHTML =
            // "The value of the variable is:" + code;
            d.getElementById("encriptado").innerHTML = (code)?  "Number to Char:" + code : ""




            //textoPuro
            /**
              
             
            let char = "";
            let count = 1;
            while (String.fromCharCode(count) != char) {
                char = String.fromCharCode(count)
                console.log(count + " - " + char)
                
                count++
            }
            */
            // for (let i = 1; i <= 1000; i++) {
            //     console.log(i + " - " + String.fromCharCode(i))
                
            // }
            
            // if(String.fromCharCode()) {console.log(true)} else {console.log(false)}

            // while () {
                
            // }
            // console.log(" " == true)

        }
    }  )
}

export function desencriptar(desencriptarBtn, texto, clave) {

    

    d.addEventListener("click", e => {
        let textoPuro,
        clavePura;

        if (e.target.matches(desencriptarBtn)) {

            textoPuro = d.getElementById(texto).value
            clavePura = d.getElementById(clave).value
            

            let claveValue = clavePura.split("").reduce((result, el, i, array) => {
                return result + el.charCodeAt(0)
            }, 0)
            
            let code = textoPuro.split("").map((el) => {
                let finalValue = el.charCodeAt(0) - claveValue
                return String.fromCharCode(finalValue)
            }).join("")
            

            // d.getElementById("desencriptado").innerHTML =
            // "The value of the variable is: " + code;
            d.getElementById("desencriptado").innerHTML = (code)?  "Number to Char:" + code : ""


        }
    }  )
}

export function ascii(asciiBtn, numero, caracter) {
    let numeroPuro = caracter,
    caracterPuro = clave;
    

    d.addEventListener("click", e => {

        if (e.target.matches(asciiBtn)) {

            numeroPuro = d.getElementById(numero).value
            caracterPuro = d.getElementById(caracter).value
            

            let numeroValueChar = (numeroPuro)? String.fromCharCode(numeroPuro): false;
            
            let charValueNumero =  (caracterPuro)? caracterPuro.charCodeAt(0): false;
            

            d.getElementById("asciiNumeroValueChar").innerHTML = (numeroValueChar)?  "Number to Char:" + numeroValueChar : ""
            d.getElementById("asciiCharValueNumero").innerHTML = (charValueNumero)? "Char to number:" + charValueNumero : ""

            

        }
    }  )
}
/* 
let $textoActual = document.querySelector("body > div.VIpgJd-TUo6Hb.XKSfm-L9AdLc.eo9XGd > div > div.IZ65Hb-TBnied.oq6NAc-h1U9Be-hxXJme > div.IZ65Hb-s2gQvd > div.IZ65Hb-qJTHM-haAclf > div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf").innerText


function encriptar(texto, clave) {

  let claveValue = clave.split("").reduce((result, el) => {
      return result + el.charCodeAt(0)
  }, 0)
  
  let code = texto.split("").map((el) => {
      let finalValue = el.charCodeAt(0) + claveValue
      return String.fromCharCode(finalValue)
  }).join("")

  return code;

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

// Selecciona cada elemento completo de cada nota
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
/*
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

IZ65Hb-s2gQvd
IZ65Hb-qJTHM-haAclf
notranslate IZ65Hb-YPqjbf fmcmS-x3Eknd h1U9Be-YPqjbf
*/
