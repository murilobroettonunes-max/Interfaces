const pesquisa = document.getElementById("pesquisa");
const mensagem = document.getElementById("mensagem");
const cartoes = document.querySelectorAll(".card");
const botoes = document.querySelectorAll("button[data-pagina]");

// Pesquisa os cartões
pesquisa.addEventListener("input", function () {
  const termo = pesquisa.value.toLowerCase().trim();

  cartoes.forEach(function (cartao) {
    const conteudo = cartao.textContent.toLowerCase();

    cartao.style.display = conteudo.includes(termo)
      ? "block"
      : "none";
  });
});

// Ações dos botões
botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const pagina = botao.dataset.pagina;

    mensagem.textContent = "Você selecionou: " + pagina;
  });
});

// Navegação inferior
document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    const pagina = link.textContent.trim();

    mensagem.textContent = "Menu selecionado: " + pagina;
  });
});