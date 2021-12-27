<small>(for the English version, <a href="#en">click here</a>)</small>

![Prévia da página - Preview of the page](./preview.gif)

# Meme Generator
<h2>:brazil: Português</h2>
<p id="pt">Projeto de HTML, CSS e JavaScript desenvolvido por mim (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) ao final do Bloco 5 do Módulo 1 do curso de Desenvolvimento Web da <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. Obtive aprovação com 100% dos requisitos obrigatórios e opcionais atingidos, e seguindo as todas as regras de padronização do código e boas práticas do Linter.</p>
<p>O projeto consistiu no desenvolvimento de uma página web dinâmica e interativa em que a pessoa usuária pode criar um meme carregando uma imagem de seu computador/dispositivo e adicionando um texto sobre ela. Também é possível alterar a borda com estilos pré-configurados.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-meme-generator/" target="_blank">Clique aqui</a> para conferir o resultado do projeto no navegador.</p>

![Minha nota no projeto - My grade of the project](./nota.png)

### Requisitos
<ol>
  <li>Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
    <ul>
      <li>A caixa onde o texto é inserido deve ter um <code>id</code> denominado <code>text-input</code>;</li>
      <li>Você deve criar um elemento para servir de "container" para a imagem e para o texto do meme. Este elemento deve ter um <code>id</code> denominado <code>meme-image-container</code>;</li>
      <li>Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o <code>id</code> denominado <code>meme-text</code>;</li>
      <li>Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.</li>
    </ul>
  </li>
  <li>O site deve permitir que quem usa faça upload de uma imagem de seu computador.
    <ul>
      <li>Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um <code>id</code> denominado <code>meme-image</code>;</li>
      <li>O elemento onde é feito o upload da imagem deve ser identificado com o <code>id</code> denominado <code>meme-insert</code>. Este elemento não precisa estar dentro do elemento de container;</li>
      <li>A imagem deve estar totalmente contida dentro do elemento identificado como <code>meme-image-container</code> ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container);</li>
      <li>O texto inserido no elemento <code>text-input</code> deve ser inserido sobre a imagem escolhida <code>meme-image</code>.</li>
    </ul>
  </li>
  <li>Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo <code>solid</code>. A área onde a imagem aparecerá deve ter fundo branco.
    <ul>
      <li>O elemento que serve de container para a imagem deve ter o a cor de fundo branca;</li>
      <li>O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;</li>
      <li>A imagem deve estar totalmente contida dentro do elemento identificado como <code>meme-image-container</code> ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).</li>
    </ul>
  </li>
  <li>Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.
    <ul>
      <li>O texto do elemento <code>meme-text</code> deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;</li>
      <li>O texto do elemento <code>meme-text</code> deve ter a fonte com o tamanho de 30 pixels;</li>
    </ul>
  </li>
  <li>Limite o tamanho do texto que o usuário pode inserir.
  <ul>
    <li>A quantidade máxima de caracteres digitáveis no elemento <code>text-input</code> deve ser 60.</li>
  </ul>
  </li>
</ol>

### Bônus
<ol start="6">
  <li>Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.
    <ul>
      <li>As bordas devem ser acrescentadas ao container, identificado como <code>meme-image-container</code>;</li>
      <li>Os três botões devem ser elementos do tipo <code>button</code>;</li>
      <li>Cada elemento <code>button</code> deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;</li>
      <li>Cada <code>button</code> deve ter o respectivo <code>id</code> e estilizar o container conforme especificado:
        <ul>
          <li>Um botão identificado com o <code>id</code> chamado <code>fire</code> deve estilizar o container da imagem com uma borda de 3 pixels, dashed e vermelha.</li>
          <li>Um botão com <code>id</code> chamado <code>water</code> deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo <code>double</code>.</li>
          <li>Um botão com <code>id</code> chamado <code>earth</code> deve estilizar o container da imagem com uma borda do tipo <code>groove</code>, verde e com 6 pixels.</li>
        </ul>
      </li>
      <li>Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;</li>
    </ul>
  </li>
  <li>Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
    <ul>
      <li>O elemento que mostra as miniaturas dos memes deve ser identificado um um <code>id</code> denominado <code>meme-1</code> para o primeiro meme, <code>meme-2</code> para o segundo, <code>meme-3</code> para o terceiro e <code>meme-4</code> para o quarto.</li>
      <li>As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado <code>imgs</code> com os respectivos nomes <code>meme1.png</code>, <code>meme2.png</code>, <code>meme3.png</code> e <code>meme4.png</code>. Atenção também para o formato das imagens!</li>
      <li>As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.</li>
    </ul>
  </li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<p>Project of HTML, CSS and JavaScript develop by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) in the end of the Unit 5 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met, and following all the Linter rules of best practices and code standardization.</p>
<p>We had to develop a dynamic and interactive web page that the user can create a meme by uploading an image from their computer/device and by adding a text on the image. It's also possible to change the image border using pre-set styles.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-meme-generator/" target="_blank">Click here</a> to check out the final version of the project on your browser.</p>

![My grade of the project - Minha nota no projeto](./nota.png)

### Requirements

### Bonus
