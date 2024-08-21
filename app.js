function encriptarTexto() {
  const textoEntrada = document.getElementById("textoEntrada").value;
  const textoEncriptado = encriptar(textoEntrada);
  
  
  mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
  const textoEntrada = document.getElementById("textoEntrada").value;
  const textoDesencriptado = desencriptar(textoEntrada);
  mostrarResultado(textoDesencriptado);
}

function encriptar(texto) {
  const desplazamiento = 3;
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
      let codigo = texto.charCodeAt(i);

      // Solo encripta letras minúsculas
      if (codigo >= 97 && codigo <= 122) {
          resultado += String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
      } else {
          resultado += texto[i]; // Deja otros caracteres sin cambios
      }
  }

  return resultado;
}

function desencriptar(texto) {
  const desplazamiento = 3;
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
      let codigo = texto.charCodeAt(i);

      // Solo desencripta letras minúsculas
      if (codigo >= 97 && codigo <= 122) {
          resultado += String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
      } else {
          resultado += texto[i]; // Deja otros caracteres sin cambios
      }
  }

  return resultado;
}

function mostrarResultado(texto) {
  const resultadoElement = document.querySelector(".resultado");
  const primerMensaje = document.querySelector(".primer-mensaje");
  
  resultadoElement.style.display = "flex";
  resultadoElement.innerHTML = texto;
  primerMensaje.style.display = "none";
}
function copiarTexto() {
  const resultadoElement = document.querySelector(".resultado");
  const texto = resultadoElement.innerHTML;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado al portapapeles");
}
