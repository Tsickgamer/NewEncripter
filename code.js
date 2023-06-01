function encriptar() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneca");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado correctamente";
    parrafo.textContent = "";
    muneco.src = "./img/encriptado.jpg";
  } else {
    muneco.src = "./img/encriptar.jpg";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneca");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado correctamente";
    parrafo.textContent = "";
    muneco.src = "./img/encriptado.jpg";
  } else {
    muneco.src = "./img/encriptar.jpg";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function copiar() {
  let texto = document.getElementById("texto").value.toLowerCase();

  document.getElementById("texto").select();
  document.execCommand("copy");
  swal("Texto Copiado");
}
