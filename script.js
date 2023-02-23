let open = true;

const menu = document.querySelector(".menu");//menu da lista
const menuClose = document.querySelector(".botao-mobile");//botao - imagem que será trocada
const menuMobile = document.querySelector(".menu-mobile");//div do botao

//evento de click

menuMobile.addEventListener("click", () => {
  menuClose.classList.toggle("close", open); //toggle - ele tira se tem e adiciona quando não tem
  menu.classList.toggle("open", open);
  open = !open;
});