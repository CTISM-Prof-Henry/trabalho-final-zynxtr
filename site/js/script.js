

function salvarMuseu() {

    // Pega os dados digitados pelo usuário
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let imagem = document.getElementById("imagem").files[0];

    // Verifica se todos os campos foram preenchidos
    if (titulo == "" || descricao == "" || !imagem) {

        alert("Preencha todos os campos!");

        return;

    }

    // Lê a imagem escolhida
    let leitor = new FileReader();

    leitor.onload = function (e) {

        // Cria um objeto com os dados do museu
        let museu = {

            titulo: titulo,

            descricao: descricao,

            imagem: e.target.result

        };

        // Salva no localStorage
        localStorage.setItem("museu", JSON.stringify(museu));

        // Vai para a página do museu
        window.location.href = "meu-museu.html";

    };

    leitor.readAsDataURL(imagem);

}

/*=========================================
    MOSTRAR O MUSEU
=========================================*/

function carregarMuseu() {

    let dados = localStorage.getItem("museu");

    if (dados == null) {

        return;

    }

    let museu = JSON.parse(dados);

    // Procura os elementos da página
    let titulo = document.getElementById("tituloMuseu");
    let descricao = document.getElementById("descricaoMuseu");
    let imagem = document.getElementById("imagemMuseu");

    // Só altera se eles existirem
    if (titulo != null) {

        titulo.innerHTML = museu.titulo;

    }

    if (descricao != null) {

        descricao.innerHTML = museu.descricao;

    }

    if (imagem != null) {

        imagem.src = museu.imagem;

    }

}

/*=========================================
    LISTAR MUSEUS
=========================================*/

function listarMuseus() {

    let lista = document.getElementById("listaMuseus");

    if (lista == null) {

        return;

    }

    let dados = localStorage.getItem("museu");

    if (dados == null) {

        return;

    }

    let museu = JSON.parse(dados);

    lista.innerHTML = `
<div class="museu-item">
    <h2>${museu.titulo}</h2>

    <img src="${museu.imagem}" style="width:100%; margin:15px 0; border-radius:8px;">

    <a href="../../../Downloads/trabalho-final-zynxtr-main/site/pages/meu-museu.html">
        <button class="btn">Abrir Museu</button>
    </a>
</div>
`;

}

/*=========================================
    EXECUTA AO ABRIR A PÁGINA
=========================================*/

window.onload = function () {

    carregarMuseu();

    listarMuseus();

}