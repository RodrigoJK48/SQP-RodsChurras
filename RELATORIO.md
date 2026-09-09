# Relatório de Desenvolvimento - SQP-RodsChurras

## 1. Análise da Especificação e Arquitetura

Após a análise detalhada dos arquivos `SPECs/spec.md`, `SPECs/DESIGN.md`, `AGENTS.md` e os modelos visuais da pasta `Theme/`, definiu-se a seguinte arquitetura para a aplicação SPA:

### 1.1 Stack Tecnológica
- **HTML5**: Estrutura semântica para navegação SPA sem recarregamento de página.
- **CSS3 Puro**: Uso de variáveis CSS para o sistema de design (paleta de cores `#671E00`, `#005666`, `#006632`, `#E69373`, `#73D3E6` e surfaces de tom carvão/brasa), animações de transição e layout responsivo.
- **JavaScript Vanilla (ES6+)**: Sem frameworks ou bundlers para garantir facilidade de hospedagem no GitHub Pages.
- **Google Fonts & Symbols**: Fontes `Poppins` (títulos) e `Open Sans` (corpo), além de Material Symbols Outlined (rigorosamente sem o uso de emojis).

### 1.2 Mapeamento de Telas da SPA
1. **Cardápio (`screen-menu`)**: Lista de produtos organizados por categoria e tipo de carne, com destaque para combos promocionais e seleção de ponto da carne em modal.
2. **Carrinho (`screen-cart`)**: Visualização dos itens adicionados, ajuste de quantidades e resumo de valores. Persistência automática no `localStorage`.
3. **Identificação da Mesa (`screen-identification`)**: Cadastro rápido pré-checkout (Nome, Área/Nº da Mesa, WhatsApp opcional).
4. **Validação de Segurança / Biometria (`screen-security`)**: Simulação de verificação de credenciais e prova de vida do dispositivo.
5. **Gateway de Pagamento Simulado (`screen-payment`)**: Escolha do método de pagamento (Cartão na Mesa, PIX, Dinheiro).
6. **Resumo e Confirmação (`screen-confirmation`)**: Exibição do comprovante do pedido e botão para reiniciar e limpar o estado/`localStorage`.

### 1.3 Recursos Transversais
- **Chamar Garçom**: Botão no cabeçalho fixo sempre visível em todas as telas com aviso toast animado.
- **Navegação Inferior / Floating Bar**: Barra fixa com acesso rápido ao cardápio, carrinho com contador em tempo real e atendimento.

---

## 2. Detalhamento dos Componentes Implementados

### 2.1 Banco de Dados Fictício (`products.json`)
- Arquivo JSON na raiz contendo lista de categorias e produtos detalhados (Cortes Nobres, Espetos, Combos e Acompanhamentos).
- Mapeamento completo de pontos da carne (Selada, Mal passada, Ao ponto, Bem passada) e fotos otimizadas.

### 2.2 Estrutura e Interface (`index.html` & `styles.css`)
- Implementação responsiva focada em mobile/tablet e compatível com telas maiores.
- Paleta de cores alinhada com o `DESIGN.md` (*Ember & Steel Churrasco*).
- Animações fluidas no aparecimento de telas, toasts de notificação e modal de seleção do ponto da carne.

### 2.3 Lógica da Aplicação (`app.js`)
- Classe `ChurrascoSPA` encarregada de carregar os produtos via `fetch('products.json')`.
- Manipulação dinâmica do `localStorage` (`ember_steel_cart`) para inserção, alteração de quantidade e exclusão automatizada de itens zerados.
- Fluxo de checkout completo e simuladores de biometria e gateway de pagamento.
- Função de reinício da sessão que limpa os formulários e limpa o `localStorage` simulando um novo acesso no restaurante.

---

## 3. Validação e Testes E2E

A verificação do fluxo da aplicação foi realizada através de testes automatizados com Playwright, simulando a jornada completa de um cliente:
1. Acesso à aplicação e seleção de um combo promocional.
2. Escolha do ponto da carne no modal interativo.
3. Transição para o carrinho e avanço para a Identificação da Mesa.
4. Preenchimento das informações da mesa e do cliente.
5. Execução do simulador de prova de vida / validação biométrica do dispositivo.
6. Escolha do método de pagamento (PIX) no gateway simulado.
7. Exibição do comprovante final com os dados consolidados e reinício com limpeza do estado.

Todos os testes apresentaram funcionamento correto, sem erros de console ou regressões visuais.
