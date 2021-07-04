const product = [
    {
        id:1,
        category: 'mobile',
        img: './images/mobile1.jpg',
        price: '19999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:2,
        category: 'mobile',
        img: './images/mobile2.jpg',
        price: '20999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:3,
        category: 'laptop',
        img: './images/laptop1.jpg',
        price: '89999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:4,
        category: 'laptop',
        img: './images/laptop2.jpg',
        price: '99999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:5,
        category: 'clothes',
        img: './images/cloth1.jpg',
        price: '2599',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:6,
        category: 'clothes',
        img: './images/cloth2.jpg',
        price: '3999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:7,
        category: 'watches',
        img: './images/watch1.jpg',
        price: '9999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:8,
        category: 'watches',
        img: './images/watch2.jpg',
        price: '12999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:9,
        category: 'furniture',
        img: './images/furniture1.jpg',
        price: '49999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    },
    {
        id:10,
        category: 'furniture',
        img: './images/furniture2.jpg',
        price: '89999',
        description: 'lorem werp ituls ipsum dollar uiue lorp saiop cutyh vhkdu fpricm'
    }
];

let newProduct = product;
let filterC = 'all';

function setFilter(filterName) {
    // alert(filterName);
    filterC = filterName;
    initializeFilter();
}

function initializeFilter() {
    // console.log('hi')
    if ( filterC == 'all') {
        newProduct = product;
        // console.log('bii')
    }
    else {
        newProduct = product.filter(product => product.category === filterC);
    }
    console.log(newProduct);
    loadProduct()
}


function loadProduct() {
    document.getElementById('product-container').innerHTML = '';
    for (let i = 0; i< newProduct.length; i++) {
        var outerStart = '<div class="single-item">'
        var outerEnd = '</div>';
        var img = `<div class="img-container"><img src=${newProduct[i].img} ></div>`;
        var info = `<div class="info"><div class="price">INR ${newProduct[i].price}</div></div>`;
        var desc = `<div class="desc"><p>${newProduct[i].description}</p></div>`;
        var full = outerStart+img+info+desc+outerEnd;
        document.getElementById('product-container').innerHTML += full;
    }
}













