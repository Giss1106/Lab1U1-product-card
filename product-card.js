class ProductCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'price', 'image', 'rating'];
  }

  constructor() {
    super();
    const template = document.getElementById('product-card-template').content;
    this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
  }

  connectedCallback() {
    this.setupEvents();
    const button = this.shadowRoot.querySelector('#add-to-cart-btn');
    const message = this.shadowRoot.querySelector('#message');

  button.addEventListener('click', () => {
    message.textContent = 'Añadido al carrito';

    // Limpiar 
    const selectedSize = this.shadowRoot.querySelector('.sizes .selected');
    if (selectedSize) {
      selectedSize.classList.remove('selected');
    }
    const selectedColor = this.shadowRoot.querySelector('.colors .selected');
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }

    const qty = this.shadowRoot.querySelector('#qty');
    if (qty) {
      qty.textContent = '1';
    }

    button.disabled = true;
    setTimeout(() => {
      message.textContent = '';
      button.disabled = false;
    }, 2000);
  });
  }

  setupEvents() {
    const shadow = this.shadowRoot;

    const sizeButtons = shadow.querySelectorAll('.sizes button');
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    const colorDivs = shadow.querySelectorAll('.colors div');
    colorDivs.forEach(div => {
      div.addEventListener('click', () => {
        colorDivs.forEach(d => d.classList.remove('selected'));
        div.classList.add('selected');
      });
    });

    let qty = 1;
    const qtyDisplay = shadow.getElementById('qty');
    shadow.getElementById('increase').addEventListener('click', () => {
      qty++;
      qtyDisplay.textContent = qty;
    });
    shadow.getElementById('decrease').addEventListener('click', () => {
      if (qty > 1) qty--;
      qtyDisplay.textContent = qty;
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;

    switch(name) {
      case 'title':
        this.shadowRoot.getElementById('product-title').textContent = newValue;
        break;
      case 'price':
        this.shadowRoot.getElementById('product-price').textContent = newValue;
        break;
      case 'image':
        this.shadowRoot.getElementById('product-image').src = newValue;
        break;
      case 'rating':
        const stars = '★'.repeat(parseInt(newValue)) + '☆'.repeat(5 - parseInt(newValue));
        this.shadowRoot.getElementById('product-rating').textContent = stars;
        break;
    }
  }
}

customElements.define('product-card', ProductCard);

