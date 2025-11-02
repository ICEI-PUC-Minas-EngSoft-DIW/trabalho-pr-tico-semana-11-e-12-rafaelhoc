const API_URL = "http://localhost:3000/projetos";

// Dados do carrossel institucional
const carrossel = [
  {
    imagem: "https://ongsbrasil.com.br/blog/wp-content/uploads/2023/10/trabalho-voluntario-onde-fazer.jpg",
    titulo: "Por um planeta mais verde e consciente",
    texto: "A EcoVida une pessoas, ideias e ações para transformar o presente e garantir um futuro sustentável."
  },
  {
    imagem: "https://grantfinder.co.uk/wp-content/uploads/2021/11/New-Fund-to-Support-the-England-Trees-Call-to-Action-Plan.jpg",
    titulo: "Pequenas atitudes geram grandes transformações",
    texto: "Participe dos nossos projetos e ajude a construir um mundo mais equilibrado e solidário."
  },
  {
    imagem: "https://www.kuonitumlare.com/documents/621599/1354511/Global_volunteer_month_header.jpg",
    titulo: "A natureza é o nosso lar",
    texto: "Preservar o meio ambiente é cuidar da vida. Faça parte dessa missão com a EcoVida."
  }
];

// ==============================
// 🟢 FUNÇÃO - Carregar carrossel
// ==============================
function carregarCarrossel() {
  const indicators = document.getElementById("carouselIndicators");
  const inner = document.getElementById("carouselInner");

  carrossel.forEach((slide, index) => {
    // Indicadores
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-bs-target", "#carouselExampleCaptions");
    button.setAttribute("data-bs-slide-to", index);
    button.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      button.classList.add("active");
      button.setAttribute("aria-current", "true");
    }
    indicators.appendChild(button);

    // Itens do carrossel
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <img src="${slide.imagem}" class="d-block w-100" alt="${slide.titulo}">
      <div class="carousel-caption d-block bg-dark bg-opacity-50 rounded">
        <h5>${slide.titulo}</h5>
        <p>${slide.texto}</p>
      </div>
    `;
    inner.appendChild(item);
  });
}

// ====================================
// 🟢 FUNÇÃO - Carregar projetos da API
// ====================================
async function carregarProjetos() {
  const container = document.getElementById("container-projetos");
  try {
    const resposta = await fetch(API_URL);
    const projetos = await resposta.json();

    container.innerHTML = "";
    projetos.forEach(p => {
      container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card w-100 shadow border-0">
            <img src="${p.imagem}" class="card-img-top projeto-img" alt="${p.titulo}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-success">${p.titulo}</h5>
              <p class="card-text flex-grow-1">${p.descricao}</p>
              <a href="detalhes.html?id=${p.id}" class="btn btn-success mt-2 align-self-start">Ver mais</a>
            </div>
          </div>
        </div>
      `;
    });
  } catch (erro) {
    console.error("Erro ao carregar projetos:", erro);
    container.innerHTML = `<p class="text-danger">Erro ao carregar os projetos.</p>`;
  }
}

// Executa se estiver na home
if (document.body.id === "home") {
  carregarCarrossel();
  carregarProjetos();
}

// =========================================
// 🟢 FUNÇÃO - Carregar detalhes de um projeto
// =========================================
async function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const idProjeto = params.get("id");
  const container = document.getElementById("detalhes-container");

  try {
    const resposta = await fetch(`${API_URL}/${idProjeto}`);
    const projeto = await resposta.json();

    if (!projeto || !projeto.id) {
      container.innerHTML = `<p class="text-danger">Projeto não encontrado.</p>`;
      return;
    }

    let fotosHTML = "";

    if (projeto.fotos && projeto.fotos.length > 0) {
      fotosHTML = `
        <h3 class="text-success mb-4">Fotos Relacionadas</h3>
        <div class="row g-4">
          ${projeto.fotos
            .map(
              (foto) => `
              <div class="col-12 col-sm-6 col-md-4">
                <div class="card border-0 shadow-sm h-100">
                  <img src="${foto.url}" class="card-img-top" alt="${foto.titulo}">
                  <div class="card-body">
                    <h6 class="card-title text-secondary">${foto.titulo}</h6>
                  </div>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="card border-0 shadow mb-5">
        <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.titulo}">
        <div class="card-body">
          <h2 class="text-success mb-3">${projeto.titulo}</h2>
          <p><strong>Descrição:</strong> ${projeto.descricao}</p>
          <p><strong>Conteúdo:</strong> ${projeto.conteudo}</p>
          <p><strong>Objetivos:</strong> ${projeto.objetivos}</p>
          <p><strong>Resultados:</strong> ${projeto.resultados}</p>
          <p><strong>Local:</strong> ${projeto.local}</p>
          <p><strong>Parceiros:</strong> ${projeto.parceiros}</p>
          <p><strong>Datas:</strong> ${projeto.datas}</p>
        </div>
      </div>

      ${fotosHTML}
    `;
  } catch (erro) {
    console.error("Erro ao carregar detalhes:", erro);
    container.innerHTML = `<p class="text-danger">Erro ao carregar o projeto.</p>`;
  }
}

// Executa se estiver na página de detalhes
if (document.body.id === "detalhes") {
  carregarDetalhes();
}