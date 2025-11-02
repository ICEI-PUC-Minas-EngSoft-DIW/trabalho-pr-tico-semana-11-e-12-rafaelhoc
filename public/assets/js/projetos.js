const tabelaProjetos = document.getElementById("tabelaProjetos");
const btnAddProjeto = document.getElementById("btnAddProjeto");
const btnSalvarProjeto = document.getElementById("btnSalvarProjeto");
const fotosContainer = document.getElementById("fotos-container");
const btnAddFoto = document.getElementById("btnAddFoto");

const modalProjeto = new bootstrap.Modal(document.getElementById("modalProjeto"));
const API_URL = "http://localhost:3000/projetos";

document.addEventListener("DOMContentLoaded", carregarProjetos);
btnAddProjeto.addEventListener("click", abrirModalNovoProjeto);
btnSalvarProjeto.addEventListener("click", salvarProjeto);
btnAddFoto.addEventListener("click", () => adicionarCampoFoto());

// === CARREGAR PROJETOS ===
async function carregarProjetos() {
  const resposta = await fetch(API_URL);
  const projetos = await resposta.json();

  tabelaProjetos.innerHTML = "";
  projetos.forEach((p) => {
    tabelaProjetos.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.titulo}</td>
        <td>${p.descricao}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-outline-primary m-1" onclick="visualizarProjeto(${p.id})">Visualizar</button>
          <button class="btn btn-sm btn-outline-warning m-1" onclick="editarProjeto(${p.id})">Editar</button>
          <button class="btn btn-sm btn-outline-danger m-1" onclick="excluirProjeto(${p.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

// === NOVO PROJETO ===
function abrirModalNovoProjeto() {
  document.getElementById("formProjeto").reset();
  fotosContainer.innerHTML = "";
  document.getElementById("modalProjetoLabel").innerText = "Adicionar Projeto";
  document.getElementById("projeto-id").value = "";
  modalProjeto.show();
}

// === EDITAR PROJETO ===
async function editarProjeto(id) {
  const resposta = await fetch(`${API_URL}/${id}`);
  const projeto = await resposta.json();

  document.getElementById("modalProjetoLabel").innerText = "Editar Projeto";
  document.getElementById("projeto-id").value = projeto.id;
  document.getElementById("projeto-titulo").value = projeto.titulo;
  document.getElementById("projeto-descricao").value = projeto.descricao;
  document.getElementById("projeto-imagem").value = projeto.imagem;
  document.getElementById("projeto-conteudo").value = projeto.conteudo;
  document.getElementById("projeto-objetivos").value = projeto.objetivos;
  document.getElementById("projeto-resultados").value = projeto.resultados;
  document.getElementById("projeto-local").value = projeto.local;
  document.getElementById("projeto-parceiros").value = projeto.parceiros;
  document.getElementById("projeto-datas").value = projeto.datas;

  fotosContainer.innerHTML = "";
  projeto.fotos?.forEach((f) => adicionarCampoFoto(f.titulo, f.url));

  modalProjeto.show();
}

// === ADICIONAR FOTO ===
function adicionarCampoFoto(titulo = "", url = "") {
  const numeroFoto = fotosContainer.children.length + 1; // Conta quantas fotos já existem
  const div = document.createElement("div");
  div.classList.add("mb-3", "border", "p-3", "rounded");

  div.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <strong>Foto ${numeroFoto}</strong>
      <button type="button" class="btn btn-sm btn-outline-danger" onclick="removerFoto(this)">Remover</button>
    </div>
    <input type="text" class="form-control mb-2 foto-titulo" placeholder="Título da foto" value="${titulo}">
    <input type="url" class="form-control foto-url" placeholder="URL da foto" value="${url}">
  `;

  fotosContainer.appendChild(div);
  atualizarNumeracaoFotos(); // Garante que, ao remover, os números fiquem corretos
}

function removerFoto(botao) {
  botao.closest(".mb-3").remove();
  atualizarNumeracaoFotos();
}

function atualizarNumeracaoFotos() {
  const fotos = fotosContainer.querySelectorAll(".mb-3");
  fotos.forEach((div, index) => {
    const titulo = div.querySelector("strong");
    titulo.textContent = `Foto ${index + 1}`;
  });
}

// === COLETAR FOTOS ===
function coletarFotos() {
  const fotos = [];
  fotosContainer.querySelectorAll(".mb-3").forEach((div) => {
    const titulo = div.querySelector(".foto-titulo").value.trim();
    const url = div.querySelector(".foto-url").value.trim();
    if (titulo && url) fotos.push({ titulo, url });
  });
  return fotos;
}

// === SALVAR (CRIAR/EDITAR) ===
async function salvarProjeto() {
  const id = document.getElementById("projeto-id").value;

  const projeto = {
    titulo: document.getElementById("projeto-titulo").value,
    descricao: document.getElementById("projeto-descricao").value,
    imagem: document.getElementById("projeto-imagem").value,
    conteudo: document.getElementById("projeto-conteudo").value,
    objetivos: document.getElementById("projeto-objetivos").value,
    resultados: document.getElementById("projeto-resultados").value,
    local: document.getElementById("projeto-local").value,
    parceiros: document.getElementById("projeto-parceiros").value,
    datas: document.getElementById("projeto-datas").value,
    fotos: coletarFotos()
  };

  const metodo = id ? "PUT" : "POST";
  const url = id ? `${API_URL}/${id}` : API_URL;

  const resposta = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(projeto)
  });

  if (resposta.ok) {
    alert(id ? "Projeto atualizado com sucesso!" : "Projeto criado com sucesso!");
    modalProjeto.hide();
    carregarProjetos();
  } else {
    alert("Erro ao salvar o projeto.");
  }
}

// === EXCLUIR ===
async function excluirProjeto(id) {
  if (!confirm("Tem certeza que deseja excluir este projeto?")) return;

  const resposta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

  if (resposta.ok) {
    alert("Projeto excluído com sucesso!");
    carregarProjetos();
  } else {
    alert("Erro ao excluir o projeto.");
  }
}

// === VISUALIZAR ===
function visualizarProjeto(id) {
  window.location.href = `detalhes.html?id=${id}`;
}