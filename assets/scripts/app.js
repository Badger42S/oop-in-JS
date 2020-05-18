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

class ProductItem{
    constructor(product){
        this.product=product;
    }
    render(){
        const prodEl=document.createElement('li');
        prodEl.className='product-item';
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
        return prodEl;
    }
}

class ProductsList{
    products= [
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
    render(){
        const renderHook=document.getElementById('app');
        const prodList=document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const productItem=new ProductItem(prod);
            const prodEl=productItem.render();
            prodList.append(prodEl);
        };
        renderHook.append(prodList);
    };
}

const productList =new ProductsList;
productList.render();