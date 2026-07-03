# Perguntas

# HTML

1. Por que usamos `<!DOCTYPE html>` no topo do documento HTML? Ele informa ao navegador que o documento está utilizando o HTML5, fazendo com que a página seja interpretada corretamente.
2. Qual a diferença entre `<head>` e `<body>`? Contém informações sobre a página que normalmente não aparecem para o usuário.
3. Para que serve a tag `<title>`? Onde ela fica localizada no documento HTML, e por quê? 
4. O que é um charset? Cite dois exemplos de charset.Charset é a codificação de caracteres utilizada pela página. Exemplos: UTF-8 e ISO-8859-1.
5. Qual a diferença entre `<div>` e containers semânticos? Cite um exemplo. A <div> serve apenas para organizar elementos, sem indicar seu significado. Já os containers semânticos informam a função daquele conteúdo, como <header>, <main> e <section>. No meu projeto utilizei <header>, <main> e <section>.
6. Qual a diferença entre `<ul>` e `<ol>`? A <ul> cria uma lista sem ordem (com marcadores) e a <ol> cria uma lista ordenada (numerada).
7. Qual a função da tag `<a>`? Ela cria links entre páginas ou para outros sites. No meu projeto ela é usada para navegar entre as páginas.
8. Para que serve o atributo `alt` na `<img>`? Serve para fornecer um texto alternativo caso a imagem não carregue e também melhora a acessibilidade.
9. Qual a importância das tags `h1` até `h6`? Elas organizam os títulos da página em níveis de importância, facilitando a leitura e a estrutura do conteúdo.
10. Quantas tags `<h1>` uma página deve ter? O recomendado é apenas uma, pois representa o título principal da página.

# CSS

1. O que é CSS? Para que é usado? CSS é a linguagem responsável pela aparência do site. É usado para definir cores, fontes, tamanhos, espaçamentos e posicionamento dos elementos.
2. Quais são as três formas de utilizar CSS em um documento Web?
3. Cite os 4 seletores CSS mais comuns e dê um exemplo de cada um no seu código. 
4. O que é um seletor composto? Dê um exemplo de seletor composto. CSS inline (na própria tag), CSS interno (na tag <style>) e CSS externo (em um arquivo .css). No meu projeto utilizei CSS externo
5. O que acontece se dois estilos entram em conflito?
6. Qual a diferença entre `margin` e `padding`? Margin é o espaço externo do elemento. Padding é o espaço interno entre o conteúdo e a borda.
7. Para que serve o `:hover`? Serve para alterar o estilo de um elemento quando o mouse passa sobre ele.
8. O que são media queries? Para que servem? Dê um exemplo no seu código.
9. Qual a utilidade da responsividade em um site? Permite que o site funcione corretamente em computadores, tablets e celulares.
10. Qual a diferença entre `vh`, `vw`, `px`, `%` e `em`?  px representa pixels; % representa uma porcentagem do elemento pai; vw é uma porcentagem da largura da tela; vh é uma porcentagem da altura da tela; em é baseado no tamanho da fonte do elemento

# Javascript

1. A linguagem Javascript é compilada ou interpretada? Por quê?px representa pixels; % representa uma porcentagem do elemento pai; vw é uma porcentagem da largura da tela; vh é uma porcentagem da altura da tela; em é baseado no tamanho da fonte do elemento
2. Para quê serve Javascript? É possível escrever um site sem Javascript? Por quê?JavaScript adiciona interatividade ao site, como validações, animações e alterações na página. Sim, é possível criar um site apenas com HTML e CSS
3. Onde o código Javascript é executado: no servidor ou no navegador?No meu projeto ele é executado no navegado
4. Como selecionar um elemento no Document Object Model?Utilizando funções como document.getElementById() ou document.querySelector(). No meu projeto utilizei getElementById().
5. Mostre ou implemente uma função no seu código-fonte. Um exemplo é a função salvarMuseu(), que valida os campos, lê a imagem, salva os dados no localStorage e redireciona o usuário para a página "Meu Museu".
6. Qual a diferença entre `getElementById` e `querySelector`?  getElementById() procura apenas elementos pelo ID. Já querySelector() permite selecionar qualquer elemento usando seletores CSS, como classes, IDs ou tags
7. Cite **dois** exemplos de eventos em Javascript. Implemente Exemplos de eventos são click e submit. No meu projeto utilizei o evento click através do onclick="salvarMuseu()", que executa a função quando o botão é clicado. 
   ou mostre a implementação de **um** evento no seu código-fonte.
8. Qual a diferença entre `let` e `var`? Cite um exemplo.  let possui escopo de bloco e é a forma mais recomendada atualmente. var possui escopo de função e pode causar conflitos. No meu projeto utilizei let, por exemplo: let titulo = document.getElementById("titulo").value;.
9. O que é um array? Para que é utilizado? Mostre no seu código ou implemente
   um array.
10. Qual a diferença entre `NaN`, `null` e `undefined`? Dê um exemplo de cada um no seu código-fonte. NaN significa "Not a Number" e representa um valor que não é numérico, como Number("abc"). null representa a ausência de um valor; no meu código aparece em verificações como if (dados == null). undefined indica que uma variável foi declarada, mas ainda não recebeu valor, como em let nome;.
