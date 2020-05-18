
const productList={
    products: [
        {
            title:'chair',
            imgUrl:'https://cdn.iconscout.com/icon/premium/png-256-thumb/chair-482-556971.png',
            description:'simple chair',
            price:'2.60'
        },
        {
            title:'box',
            imgUrl:'https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/box_surprise.png',
            description:'empty box',
            price:'9.99'
        }
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