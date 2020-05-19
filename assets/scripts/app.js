class Component{
    constructor(renderHookId, shouldRender=true){
        this.hookId=renderHookId;
        if(shouldRender){
            this.render();
        }
    }
    render(){}
    createRootElement(tag,cssClasses, attributes){
        const rootElement=document.createElement(tag);
        if(cssClasses){
            rootElement.className=cssClasses;
        }
        if(attributes && attributes.length>0){
            for(const atr of attributes){
                rootElement.setAttribute(atr.name,atr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class Product{
    title;
    imgUrl;;
    price;
    description;
    constructor(title, imgUrl,price,desc){
        this.title=title;
        this.imgUrl=imgUrl;
        this.price=price;
        this.description=desc;
    }
}

class ProductItem extends Component{
    constructor(product, hookId){
        super(hookId,false);
        this.product=product;
        this.render();
    }
    addToCart(){
        App.addProductToCart(this.product);
    }
    render(){
        const prodEl=this.createRootElement('li','product-item');
        prodEl.innerHTML=`
            <div>
            <img src="${this.product.imgUrl}" alt="${this.product.title}">
            <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
        `;
        const addButton=prodEl.querySelector('button');
        addButton.addEventListener('click',this.addToCart.bind(this))
    }
}

class ElementAttribute{
    constructor(attrName, attrValue){
        this.name=attrName;
        this.value=attrValue;
    }
}

class ProductsList extends Component{
    constructor(hookId){
        super(hookId);
        this.fetchProducts();
    }

    products= [];
    //simulate waiting data
    fetchProducts(){
        this.products= [
            new Product(
                'chair',
                'https://cdn.iconscout.com/icon/premium/png-256-thumb/chair-482-556971.png',
                2.60,
                'empty box'
            ),
            new Product(
                'box',
                'https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/box_surprise.png',
                9.99,
                'empty box'
            )
        ];
        this.renderProducts();
    }
    //stand alone function for render
    renderProducts(){
        for(const prod of this.products){
            const productItem=new ProductItem(prod, 'prod-list');
            productItem.render();
        };
    }
    //override parrent metod
    render(){
        this.createRootElement(
            'ul', 
            'product-list', 
            [new ElementAttribute('id', 'prod-list')]
        );
        if(this.products &&this.products.length>0){
            this.renderProducts();
        }
    };
}

class Cart extends Component{
    constructor(hookId){
        super(hookId)
    }

    items=[];

    get  totalAmont(){
        let sum=this.items.reduce((prevValue, item)=>{
            return prevValue+item.price
        },0);
        return sum;
    }
    addItem(product){
        this.items.push(product);
        this.totalOutput.innerHTML=`<h2>Total amount: \$${this.totalAmont.toFixed(2)}</h2>`;
    }
    render(){
        const cartEl=this.createRootElement('section', 'cart');
        cartEl.innerHTML=`
         <h2>Total amount: \$${0}</h2>
         <button>Order</button>
        `;
        this.totalOutput=cartEl.querySelector('h2');
    }
}

class Shop{
    constructor(){
        this.cart =new Cart('app');
        new ProductsList('app');
    }
}

class App{
    static init(){
        const shop =new Shop;
        this.cart=shop.cart;
    }
    static addProductToCart(product){
        this.cart.addItem(product);
    }
}

App.init();