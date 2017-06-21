//do stuff

(function() {
  function Cart(items) {
    this.totalPrice = 0
    this.items = document.querySelectorAll('.item')
    this.cartField = document.querySelector('#cart-button')
    this.itemCount = 0
    this.clickHandler = this.clickHandler.bind(this)
    this.cartHandler = this.cartHandler.bind(this)
    this.clear = this.clear.bind(this)
    this.addListener()
  }

  Cart.prototype.clickHandler = function(event) {
    console.log('clicked',event.target.parentNode.children[1].innerHTML)
    const item = event.target.parentNode.children[0].innerHTML
    const price = Number(event.target.parentNode.children[1].innerHTML.slice(1))
    this.totalPrice += price
    this.totalPrice = Number(this.totalPrice.toFixed(2))
    var li_item = document.createElement('span')
    li_item.appendChild(document.createTextNode(item))
    var li_price = document.createElement('span')
    li_price.appendChild(document.createTextNode(price))
    var li = document.createElement('li')
    li.setAttribute('class','flex flex-row-between')
    li.appendChild(li_item)
    li.appendChild(li_price)
    document.querySelector('.cart-list').appendChild(li)
    document.querySelector('#total-price').innerHTML = '$' + this.totalPrice
    this.itemCount++
    this.cartField.children[0].innerHTML = '(' + this.itemCount +')'
  }

  Cart.prototype.addListener = function() {
    this.items.forEach((item,i) => {
      item.children[2].addEventListener('click', this.clickHandler)
    })

    this.cartField.addEventListener('click', this.cartHandler)
    document.querySelector('.close-cart').addEventListener('click', this.cartHandler)
    document.querySelector('.clear-cart').addEventListener('click', this.clear)
  }

  Cart.prototype.cartHandler = function() {
    var cart = document.querySelector('.maskoff')
    cart.style.display = cart.style.display === 'block' ? 'none':'block'
  }

  Cart.prototype.clear = function() {
    this.itemCount = 0
    this.totalPrice = '0.00'
    var cartList = document.querySelector('.cart-list')
    while(cartList.hasChildNodes()) {
      cartList.removeChild(cartList.lastChild)
    }
    document.querySelector('#total-price').innerHTML = '$' + this.totalPrice
  }

  var cart = new Cart()
})()
