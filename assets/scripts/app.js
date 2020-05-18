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
const productList={
    products: [
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
    ],
    render(){
        const renderHook=document.getElementById('app');
        const prodList=document.createElement('ul');
        prodList.className='product-list';
        for(const prod of this.products){
            const prodEl=document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML=`
                <div>
                 <img src="${prod.imgUrl}" alt="${prod.title}">
                 <div class="product-item__content">
                  <h2>${prod.title}</h2>
                  <h3>\$${prod.price}</h3>
                  <p>${prod.description}</p>
                  <button>Add to cart</button>
                 </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();