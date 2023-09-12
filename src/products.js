const products = [
    {
        id: "1",
        name: "Remera roja",
        price: 4500,
        img: "https://acdn.mitiendanube.com/stores/001/129/623/products/dsc_08361-95b8b70e4e513b1d9a16928004831524-640-0.jpg",
        stock: 15,
        category: "remera",
        description: "remera lisa impecable, ideal para salir de fiesta o casual"
    },
    {
        id: "2",
        name: "Remera Negra",
        price: 4500,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/003/148/016/products/remera-negra-lisa-algodon21-719bfacb9a9322320d16860022139426-640-0.jpg",
        stock: 12,
        category: "remera",
        description: "remera lisa impecable, ideal para salir de fiesta o casual"
    },
    {
        id: "3",
        name: "Remera Verde",
        price: 4500,
        img: "https://www.sonder.com.ar/image/catalog/Productos/3442L8622_a_N.jpg",
        stock: 15,
        category: "remera",
        description: "remera lisa impecable, ideal para salir de fiesta o casual"
    },
    {
        id: "4",
        name: "Remera Blanca",
        price: 4500,
        img: "https://admin.americabebes.com.ar/files/productos/img_1580739743334.jpg.ashx?w=768&h=768",
        stock: 18,
        category: "remera",
        description: "remera lisa impecable, ideal para salir de fiesta o casual"
    },
    {
        id: "5",
        name: "Buso Rojo",
        price: 4500,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/buzo-canguro-ro-bfilc-11-eaf0e78e5c8f970dc415917936730849-1024-1024.jpg",
        stock: 12,
        category: "buso",
        description: "nuevo modelo de buso liso, importado, ideal para este invierno"
    },
    {
        id: "6",
        name: "Buso Negro",
        price: 4500,
        img: "https://t-static.dafiti.com.br/oMR20nqNPiNKpG4zbO1aLzCFUUo=/400x580/smart/filters:quality(90)/static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg",
        stock: 7,
        category: "buso",
        description: "nuevo modelo de buso liso, importado, ideal para este invierno"
    },
    {
        id: "7",
        name: "Buso Verde",
        price: 4500,
        img: "https://www.puntosport.com.ar/9844-thickbox_default/buzo-new-balance-essentials-embri-hombre-lifestyle-verde-mt11550tmt.jpg",
        stock: 5,
        category: "buso",
        description: "nuevo modelo de buso liso, importado, ideal para este invierno"
    },
    {
        id: "8",
        name: "Buso Blanco",
        price: 4500,
        img: "https://acdn.mitiendanube.com/stores/001/268/672/products/77baf6a47f3c5f817658520a84097c5511-e167d85110c8d3a9e016183719388977-640-0.jpg",
        stock: 23,
        category: "buso",
        description: "nuevo modelo de buso liso, importado, ideal para este invierno"
    },
    {
        id: "9",
        name: "Pantalon Rojo",
        price: 4500,
        img: "https://http2.mlstatic.com/D_NQ_NP_968005-MLA69849678355_062023-O.webp",
        stock: 14,
        category: "pantalon",
        description: "increibles pantalones para uso variado, excelente calidad y sobre todo excelente precio"
    },
    {
        id: "10",
        name: "Pantalon Negro",
        price: 4500,
        img: "https://hips.hearstapps.com/hmg-prod/images/jogger-negro-s-oliver1-1643286900.jpg",
        stock: 12,
        category: "pantalon",
        description: "increibles pantalones para uso variado, excelente calidad y sobre todo excelente precio"
    },
    {
        id: "11",
        name: "Pantalon Verde",
        price: 4500,
        img: "https://acdn.mitiendanube.com/stores/001/185/293/products/verde-589798dc4f1aeedcc615906881438806-640-0.png",
        stock: 7,
        category: "pantalon",
        description: "increibles pantalones para uso variado, excelente calidad y sobre todo excelente precio"
    },
    {
        id: "12",
        name: "Pantalon Blanco",
        price: 4500,
        img: "https://http2.mlstatic.com/D_NQ_NP_874747-MLM53632877640_022023-O.webp",
        stock: 9,
        category: "pantalon",
        description: "increibles pantalones para uso variado, excelente calidad y sobre todo excelente precio"
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("No encontramos resultados")
            }
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFiltered = category
                ? products.filter((product) => product.category === category)
                : products;
            resolve(productsFiltered)
        }, 500);
    });
}





export default products




