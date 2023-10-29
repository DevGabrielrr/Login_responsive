'use strict'

const loginContainer = document.getElementById('login-container');

const moverOverlay = ()=> loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click',moverOverlay);
document.getElementById('open-login').addEventListener('click',moverOverlay);
  