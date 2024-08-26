const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const laLlave = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
                };

const laLlaveInv = Object.fromEntries(
    Object.entries(laLlave).map(([Swrd, Shld]) => [Shld, Swrd]));

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(texto) {
    const filtro = texto.replace(/[^a-z\s]/g);
    let resultado = filtro.toLowerCase();
    for (const [Swrd, Shld] of Object.entries(laLlave)) {
        resultado = resultado.replaceAll(Swrd, Shld);
    }
    return resultado;
}

function desencriptar(texto) {
    const filtro = texto.replace(/[^a-z\s]/g);
    let resultado = filtro.toLowerCase();
    for (const [Swrd, Shld] of Object.entries(laLlaveInv)) {
        resultado = resultado.replaceAll(Swrd, Shld);
    }
    return resultado;
}

function copiar(){
    const mensajeTextarea = document.querySelector(".mensaje");
    navigator.clipboard.writeText(mensajeTextarea.value);
}

