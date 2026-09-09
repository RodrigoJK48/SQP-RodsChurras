/**
 * Ember & Steel Churrasco - SPA Application Logic
 */

class ChurrascoSPA {
  constructor() {
    this.cardapioData = { categorias: [], produtos: [] };
    this.categoriaAtiva = 'todos';
    this.carrinho = this.carregarCarrinhoStorage();
    this.produtoPendente = null;
    this.pontoSelecionado = null;
    this.metodoPagamento = 'Cartão de Crédito na Mesa';
    this.cliente = { nome: '', mesa: '', whatsapp: '' };

    this.init();
  }

  async init() {
    await this.carregarProdutosJSON();
    this.renderizarCategorias();
    this.renderizarProdutos();
    this.atualizarBadgeCarrinho();
  }

  // Carregamento de dados a partir do arquivo JSON
  async carregarProdutosJSON() {
    try {
      const response = await fetch('products.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar dados do arquivo JSON');
      }
      this.cardapioData = await response.json();
    } catch (error) {
      console.error('Falha no fetch, utilizando estrutura de fallback:', error);
      this.cardapioData = {
        categorias: [
          { id: "todos", label: "Todos os Cortes", icon: "all_inclusive" },
          { id: "nobres", label: "Cortes Nobres", icon: "local_fire_department" },
          { id: "espetos", label: "Espetos Tradicionais", icon: "kebab_dining" },
          { id: "combos", label: "Combos & Kits", icon: "lunch_dining" },
          { id: "porcoes", label: "Acompanhamentos", icon: "rice_bowl" }
        ],
        produtos: []
      };
    }
  }

  // Local Storage
  carregarCarrinhoStorage() {
    try {
      const raw = localStorage.getItem('ember_steel_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  salvarCarrinhoStorage() {
    try {
      localStorage.setItem('ember_steel_cart', JSON.stringify(this.carrinho));
    } catch (e) {}
    this.atualizarBadgeCarrinho();
  }

  limparTudoStorage() {
    localStorage.removeItem('ember_steel_cart');
    this.carrinho = [];
    this.cliente = { nome: '', mesa: '', whatsapp: '' };
    this.atualizarBadgeCarrinho();
  }

  // Gestão de Telas / Navegação SPA
  navegarPara(telaId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(telaId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Atualiza estado visual na barra inferior
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (telaId === 'screen-menu') {
      document.getElementById('nav-btn-menu')?.classList.add('active');
    } else if (telaId === 'screen-cart') {
      document.getElementById('nav-btn-cart')?.classList.add('active');
      this.renderizarCarrinho();
    }
  }

  // Renderização de Categorias
  renderizarCategorias() {
    const container = document.getElementById('categories-container');
    if (!container || !this.cardapioData.categorias) return;

    container.innerHTML = this.cardapioData.categorias.map(cat => `
      <button class="cat-btn ${cat.id === this.categoriaAtiva ? 'active' : ''}" onclick="app.filtrarCategoria('${cat.id}')">
        <span class="material-symbols-outlined" style="font-size: 15px;">${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join('');
  }

  filtrarCategoria(catId) {
    this.categoriaAtiva = catId;
    this.renderizarCategorias();
    this.renderizarProdutos();
  }

  // Renderização de Produtos
  renderizarProdutos() {
    const container = document.getElementById('products-container');
    if (!container || !this.cardapioData.produtos) return;

    const lista = this.cardapioData.produtos.filter(p => {
      if (this.categoriaAtiva === 'todos') return true;
      return p.categoria === this.categoriaAtiva;
    });

    container.innerHTML = lista.map(prod => `
      <div class="product-card ${prod.isPromo ? 'promo' : ''}">
        <img src="${prod.imagem}" alt="${prod.nome}" class="product-img" loading="lazy">
        <div class="product-info">
          <div>
            ${prod.destaque ? `<div class="badge-destaque"><span class="material-symbols-outlined" style="font-size:12px;">grade</span> ${prod.destaque}</div>` : ''}
            <div class="product-title">${prod.nome}</div>
            <div class="product-desc">${prod.descricao}</div>
          </div>
          <div class="product-meta">
            <div class="product-price">R$ ${prod.preco.toFixed(2).replace('.', ',')}</div>
            <button class="btn-add-item" onclick="app.abrirSelecaoProduto(${prod.id})">
              <span class="material-symbols-outlined" style="font-size: 15px;">add</span>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Modal de Seleção do Ponto da Carne
  abrirSelecaoProduto(id) {
    const prod = this.cardapioData.produtos.find(p => p.id === id);
    if (!prod) return;

    // Acompanhamentos ou itens sem ponto
    if (!prod.pontos || prod.pontos.length === 0) {
      this.adicionarItemCarrinho(prod, null);
      this.exibirToast(`Adicionado: ${prod.nome}`);
      return;
    }

    this.produtoPendente = prod;
    this.pontoSelecionado = prod.pontos[0]; // Ponto default

    document.getElementById('modal-product-name').innerText = prod.nome;
    const listEl = document.getElementById('modal-pontos-list');
    listEl.innerHTML = prod.pontos.map((p, index) => `
      <div class="ponto-option ${index === 0 ? 'selected' : ''}" onclick="app.selecionarPonto(this, '${p}')">
        <span class="ponto-name">${p}</span>
        <span class="material-symbols-outlined" style="font-size: 18px; color: var(--color-cyan-accent);">check</span>
      </div>
    `).join('');

    document.getElementById('ponto-modal').classList.add('active');
  }

  selecionarPonto(el, ponto) {
    this.pontoSelecionado = ponto;
    document.querySelectorAll('.ponto-option').forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
  }

  fecharModalPonto() {
    document.getElementById('ponto-modal').classList.remove('active');
    this.produtoPendente = null;
    this.pontoSelecionado = null;
  }

  confirmarAdicaoAoCarrinho() {
    if (this.produtoPendente) {
      this.adicionarItemCarrinho(this.produtoPendente, this.pontoSelecionado);
      this.exibirToast(`${this.produtoPendente.nome} (${this.pontoSelecionado}) adicionado!`);
      this.fecharModalPonto();
    }
  }

  adicionarComboDestaque() {
    const combo = this.cardapioData.produtos.find(p => p.id === 2);
    if (combo) {
      this.abrirSelecaoProduto(combo.id);
    }
  }

  // Operações no Carrinho
  adicionarItemCarrinho(produto, ponto) {
    const key = `${produto.id}-${ponto || 'padrao'}`;
    const itemExistente = this.carrinho.find(i => i.chave === key);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      this.carrinho.push({
        chave: key,
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        ponto: ponto,
        quantidade: 1
      });
    }

    this.salvarCarrinhoStorage();
  }

  alterarQtdCarrinho(chave, delta) {
    const item = this.carrinho.find(i => i.chave === chave);
    if (!item) return;

    item.quantidade += delta;
    if (item.quantidade <= 0) {
      this.carrinho = this.carrinho.filter(i => i.chave !== chave);
    }

    this.salvarCarrinhoStorage();
    this.renderizarCarrinho();
  }

  atualizarBadgeCarrinho() {
    const count = this.carrinho.reduce((acc, cur) => acc + cur.quantidade, 0);
    const badge = document.getElementById('cart-badge-count');
    if (!badge) return;
    if (count > 0) {
      badge.innerText = count;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }

  renderizarCarrinho() {
    const container = document.getElementById('cart-items-list');
    const emptyView = document.getElementById('cart-empty-view');
    const summaryBox = document.getElementById('cart-summary-box');

    if (this.carrinho.length === 0) {
      container.innerHTML = '';
      emptyView.style.display = 'block';
      summaryBox.style.display = 'none';
      return;
    }

    emptyView.style.display = 'none';
    summaryBox.style.display = 'block';

    let subtotal = 0;
    container.innerHTML = this.carrinho.map(item => {
      const itemTotal = item.preco * item.quantidade;
      subtotal += itemTotal;
      return `
        <div class="cart-item">
          <div class="cart-item-detail">
            <div class="cart-item-title">${item.nome}</div>
            ${item.ponto ? `<div class="cart-item-sub">Ponto: ${item.ponto}</div>` : ''}
            <div style="font-size: 12px; font-weight: 700; color: var(--color-primary-accent); margin-top: 2px;">
              R$ ${item.preco.toFixed(2).replace('.', ',')}
            </div>
          </div>
          <div class="cart-qty-ctrl">
            <button class="btn-qty" onclick="app.alterarQtdCarrinho('${item.chave}', -1)">
              <span class="material-symbols-outlined" style="font-size: 16px;">remove</span>
            </button>
            <span style="font-size: 12px; font-weight: 700; min-width: 14px; text-align: center;">${item.quantidade}</span>
            <button class="btn-qty" onclick="app.alterarQtdCarrinho('${item.chave}', 1)">
              <span class="material-symbols-outlined" style="font-size: 16px;">add</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    const formattedTotal = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('summary-subtotal').innerText = formattedTotal;
    document.getElementById('summary-total').innerText = formattedTotal;
  }

  irParaIdentificacao() {
    if (this.carrinho.length === 0) {
      this.exibirToast('Adicione produtos antes de continuar.');
      return;
    }
    this.navegarPara('screen-identification');
  }

  salvarIdentificacao() {
    const nome = document.getElementById('input-client-name').value.trim();
    const mesa = document.getElementById('input-table-number').value.trim();
    const whats = document.getElementById('input-whatsapp').value.trim();

    if (!nome || !mesa) {
      this.exibirToast('Por favor, informe seu nome e sua mesa.');
      return;
    }

    this.cliente = { nome, mesa, whatsapp: whats };
    this.navegarPara('screen-security');
  }

  // Simulação de Validação Biométrica / Prova de Vida
  executarSimulacaoSeguranca() {
    const iconBox = document.getElementById('biometry-icon-box');
    const symbol = document.getElementById('security-icon-symbol');
    const title = document.getElementById('security-status-title');
    const desc = document.getElementById('security-status-desc');
    const btn = document.getElementById('btn-simulate-auth');

    iconBox.classList.add('animating');
    symbol.innerText = 'fingerprint';
    title.innerText = 'Validando biometria do aparelho...';
    desc.innerText = 'Comunicando com os sensores de segurança locais.';
    btn.disabled = true;
    btn.style.opacity = '0.5';

    setTimeout(() => {
      iconBox.classList.remove('animating');
      symbol.innerText = 'verified';
      symbol.style.color = '#34D399';
      title.innerText = 'Credenciais Autenticadas!';
      desc.innerText = 'Prova de vida validada com sucesso no dispositivo.';

      setTimeout(() => {
        const subtotal = this.carrinho.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
        document.getElementById('payment-amount').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        this.navegarPara('screen-payment');
        btn.disabled = false;
        btn.style.opacity = '1';
        symbol.style.color = 'var(--color-cyan-accent)';
        symbol.innerText = 'fingerprint';
        title.innerText = 'Autenticação do Dispositivo';
        desc.innerText = 'Aproxime sua biometria ou confirme as credenciais do seu aparelho.';
      }, 900);
    }, 1400);
  }

  // Gateway de Pagamento Simulado
  selecionarMetodoPagamento(elem, metodo) {
    this.metodoPagamento = metodo;
    document.querySelectorAll('.payment-card-opt').forEach(opt => {
      opt.classList.remove('selected');
      const check = opt.querySelector('.material-symbols-outlined:last-child');
      if (check) check.style.color = 'transparent';
    });
    elem.classList.add('selected');
    const activeCheck = elem.querySelector('.material-symbols-outlined:last-child');
    if (activeCheck) activeCheck.style.color = 'var(--color-grill-green)';
  }

  processarPagamentoSimulado() {
    const btn = document.getElementById('btn-process-payment');
    btn.innerHTML = `<span class="material-symbols-outlined">sync</span> Processando Simulação...`;
    btn.disabled = true;

    setTimeout(() => {
      this.exibirResumoConfirmacao();
      this.navegarPara('screen-confirmation');
      btn.innerHTML = `<span>Confirmar e Concluir Pedido</span><span class="material-symbols-outlined">done_all</span>`;
      btn.disabled = false;
    }, 1100);
  }

  exibirResumoConfirmacao() {
    document.getElementById('confirm-client-name').innerText = this.cliente.nome || 'Cliente Salão';
    document.getElementById('confirm-table').innerText = this.cliente.mesa || 'Mesa Balcão';
    document.getElementById('confirm-payment-method').innerText = this.metodoPagamento;

    const subtotal = this.carrinho.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
    document.getElementById('confirm-total-amount').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    const itemsContainer = document.getElementById('confirm-items-list');
    itemsContainer.innerHTML = this.carrinho.map(item => `
      <li style="display: flex; justify-content: space-between; color: var(--color-text-muted);">
        <span>${item.quantidade}x ${item.nome} ${item.ponto ? `<small>(${item.ponto})</small>` : ''}</span>
        <span>R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
      </li>
    `).join('');
  }

  // Reinício da Aplicação e Limpeza do LocalStorage
  reiniciarAplicacao() {
    this.limparTudoStorage();
    document.getElementById('input-client-name').value = '';
    document.getElementById('input-table-number').value = '';
    document.getElementById('input-whatsapp').value = '';
    this.exibirToast('Novo atendimento iniciado!');
    this.navegarPara('screen-menu');
  }

  // Ação de Chamar Garçom
  chamarGarcom() {
    this.exibirToast('Garçom chamado! Um atendente irá até sua mesa.');
  }

  exibirToast(mensagem) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toast-text');
    if (!toast || !text) return;
    text.innerText = mensagem;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

// Inicialização Global da Instância SPA
const app = new ChurrascoSPA();
