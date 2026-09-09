# App SPA de Cardápio de Churrasco
## Contexto
Crie uma aplicação SPA, com a stack HTML, CSS, JS puro, sem pacotes ou dependências para permitir hospedagem no GitHub Pages.
A aplicação será um cardápio, estilo restaurante, para uma churrascaria.
## Recursos do App
1. Carregar os dados do cardápio a partir de uma **estrutura JSON** contendo todas as informações do produto, organizado por:
	- Tipo de carne,
	- Categoria do produto,
	- Pontos disponíveis da carne,
	- Outros dados triviais como descrição,
	- E um destaque para eventuais produtos em promoção, ou kits do tipo "Combo com arroz, feijão e farinha".
2. O aplicativo SPA irá carregar, na primeira tela, a lista de produtos. Não exige cadastro até o checkout.
3.  Opção de chamar garçom sempre visível via botão no cabeçalho.
4. O SPA deverá usar o **Local Storage** para armazenar itens e sua quantidade no carrinho.
5. Ao finalizar a compra no carrinho, o usuário então deverá cadastrar-se (nome, área de atendimento/nº da mesa, e opcionalmente contato via WhattsApp).
6. Após o cadastro, simula o pedido das credenciais do dispositivo como camada de segurança e prova de vida.
7. Após validar as credenciais, simular um gateway de pagamento genérico.
8. Ao finalizar o pedido, exibir um resumo do pedido (itens, valor total, área de atendimento/retirada) e limpar os dados para simular outro acesso.
## O Que o Aplicativo Não Deve Fazer
1. Processar o pagamento. Será apenas uma simulação.
2. Cadastrar produtos. Iremos carregar os dados de um arquivo JSON fictício, gerado por IA.
3. Delivery. O aplicativo não controla delivery.
4. Armazenamento de fotos. Imagens de produtos serão buscadas na web, sem geração de produtos que não existam. A exceção é a logo e suas versões.
5. Salvar resumos de pedidos. Ao finalizar o processo simulado, os dados coletados são perdidos.
## UI / UX
1. Utilize a paleta de cores:
	- #671E00
	- #005666
	- #006632
	- #E69373
	- #73D3E6
2. Utilize Google Fonts: `Poppins` para títulos e `Open Sans` para texto corrido e aplique versões condensadas das fontes quando conveniente.
3. **Não use emojis**, Utilize Google Icons.
4. Interface minimalista, fundo contrasta com paleta de cores.
5. Adicione pequenas animações em botões e transições de telas.
