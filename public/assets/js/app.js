// Estrutura JSON com os projetos da EcoVida
const projeto = [
  {
    "id": 1,
    "titulo": "Reflorestamento Local",
    "descricao": "Plantar árvores nativas para recuperar áreas degradadas e aumentar a biodiversidade da região.",
    "imagem": "https://www.branco.com.br/content/dam/Branco/Latin%20America/Portuguese-BR/Images/newsroom/Reflorestramento%20-%2003.jpg",
    "conteudo": "O projeto de Reflorestamento Local tem como objetivo restaurar áreas degradadas por meio do plantio de espécies nativas.",
    "objetivos": "Restaurar áreas degradadas, envolver a comunidade local e aumentar a biodiversidade.",
    "resultados": "Mais de 500 árvores plantadas e 3 hectares recuperados.",
    "local": "Belo Horizonte - MG",
    "parceiros": "Escolas locais, ONGs ambientais e empresas patrocinadoras",
    "datas": "Início: 01/01/2025 | Término: 31/12/2025",
    "fotos": [
      {
        "titulo": "Mutirão de plantio com voluntários locais",
        "url": "https://feac.org.br/wp-content/uploads/2018/04/PARA-SITE-1.jpg"
      },
      {
        "titulo": "Mudas nativas cultivadas para reflorestamento",
        "url": "https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/imagem/2024-10/viveiro_eng.beltrao_021.jpg"
      },
      {
        "titulo": "Vista aérea de área reflorestada",
        "url": "https://agenciapara.com.br/midias/2024/grandes/20103_a2a9dcc1-0027-379a-86d7-16a686ee90ff.jpg"
      }
    ]
  },
  {
    "id": 2,
    "titulo": "Educação Ambiental",
    "descricao": "Oficinas e palestras em escolas para promover hábitos sustentáveis entre crianças e jovens.",
    "imagem": "https://www.infoescola.com/wp-content/uploads/2019/09/educacao-ambiental-639310237.jpg",
    "conteudo": "O projeto busca formar cidadãos conscientes por meio de palestras, oficinas e campanhas educativas em escolas públicas.",
    "objetivos": "Promover hábitos sustentáveis e conscientização ambiental.",
    "resultados": "Mais de 500 alunos impactados e 20 escolas atendidas.",
    "local": "Belo Horizonte - MG",
    "parceiros": "Secretaria de Educação, ONGs ambientais",
    "datas": "Início: 01/02/2025 | Término: 31/10/2025",
    "fotos": [
      {
        "titulo": "Palestra sobre sustentabilidade em escola pública",
        "url": "https://conexaoeduca.saosebastiao.sp.gov.br/wp-content/uploads/2022/06/d9c240f3-1310-4243-ac76-01fbe7dbc98a-1024x682.jpg"
      },
      {
        "titulo": "Distribuição de material de conscientização ambiental",
        "url": "https://lucasdorioverde.mt.gov.br/arquivos/noticias/11435/g/pref_lrv.jpg"
      },
      {
        "titulo": "Oficina de reciclagem para crianças",
        "url": "https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/whatsapp_image_2019-07-05_at_17.31.40.jpeg?itok=SR-l0e9y"
      }
    ]
  },
  {
    "id": 3,
    "titulo": "Proteção da Fauna Silvestre",
    "descricao": "Monitoramento e proteção de espécies nativas ameaçadas, com ações para preservar seus habitats naturais.",
    "imagem": "https://correiopiauiense.com.br/media/image_bank/2025/3/thumbs/programa-de-protecao-a-fauna-silvestre-e-criado-no-piaui.jpg.1200x0_q95_crop.jpeg",
    "conteudo": "O projeto realiza o monitoramento de espécies em risco e ações de preservação de habitats naturais.",
    "objetivos": "Proteger espécies ameaçadas e preservar seus habitats.",
    "resultados": "Espécies monitoradas: 15 | Áreas protegidas: 10 hectares",
    "local": "Parques e reservas naturais da região",
    "parceiros": "Institutos de Pesquisa, ONGs e voluntários",
    "datas": "Início: 01/03/2025 | Término: 31/12/2025",
    "fotos": [
      {
        "titulo": "Onça-pintada: símbolo da biodiversidade brasileira",
        "url": "https://www.sedest.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2025-09/onca_003.jpg"
      },
      {
        "titulo": "Lobo-guará em área de preservação",
        "url": "https://www.sedest.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2025-09/lobo_guara_001.jpg"
      },
      {
        "titulo": "Tamanduá-bandeira em seu habitat natural",
        "url": "https://www.sedest.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2025-09/tamandua_002.jpg"
      }
    ]
  }
];

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

// Função para montar o carrossel dinamicamente
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

// Função para montar os cards de projetos
function carregarProjetos() {
  const container = document.getElementById("container-projetos");
  projeto.forEach(p => {
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
}

// Executa se estiver na home
if (document.body.id === "home") {
  carregarCarrossel();
  carregarProjetos();
}

// Página de detalhes
function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const idProjeto = params.get("id");
  const projetoSelecionado = projeto.find(p => p.id == idProjeto);
  const container = document.getElementById("detalhes-container");

  if (projetoSelecionado && container) {
    let fotosHTML = "";

    if (projetoSelecionado.fotos && projetoSelecionado.fotos.length > 0) {
      fotosHTML = `
        <h3 class="text-success mb-4">Fotos Relacionadas</h3>
        <div class="row g-4">
          ${projetoSelecionado.fotos.map(foto => `
            <div class="col-12 col-sm-6 col-md-4">
              <div class="card border-0 shadow-sm h-100">
                <img src="${foto.url}" class="card-img-top" alt="${foto.titulo}">
                <div class="card-body">
                  <h6 class="card-title text-secondary">${foto.titulo}</h6>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    container.innerHTML = `
      <!-- Card de Informações Gerais -->
      <div class="card border-0 shadow mb-5">
        <img src="${projetoSelecionado.imagem}" class="card-img-top" alt="${projetoSelecionado.titulo}">
        <div class="card-body">
          <h2 class="text-success mb-3">${projetoSelecionado.titulo}</h2>
          <p><strong>Descrição:</strong> ${projetoSelecionado.descricao}</p>
          <p><strong>Conteúdo:</strong> ${projetoSelecionado.conteudo}</p>
          <p><strong>Objetivos:</strong> ${projetoSelecionado.objetivos}</p>
          <p><strong>Resultados:</strong> ${projetoSelecionado.resultados}</p>
          <p><strong>Local:</strong> ${projetoSelecionado.local}</p>
          <p><strong>Parceiros:</strong> ${projetoSelecionado.parceiros}</p>
          <p><strong>Datas:</strong> ${projetoSelecionado.datas}</p>
        </div>
      </div>

      <!-- Seção de Fotos Relacionadas -->
      ${fotosHTML}
    `;
  } else if (container) {
    container.innerHTML = `<p class="text-danger">Projeto não encontrado.</p>`;
  }
}

if (document.body.id === "detalhes") carregarDetalhes();