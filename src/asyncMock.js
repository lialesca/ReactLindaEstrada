const products = [
{
    id: "1",
    name: "iPhone 12",
    price: 800,
    category: "celular",
    img: "https://ishop.gt/cdn/shop/files/A012000x2000_76f84344-582e-4648-8815-9202f602e09a.webp?v=1725987162&width=823",
    stock: 25,
    information:"Click para ver más detalles",
    description: "Diseño resistente con Ceramic Shield, Chip A14 Bionic, Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision",
},
{
    id: "2",
    name: "iPhone15 Plus",
    price: 1500,
    category: "celular",
    img: "https://ishop.gt/cdn/shop/files/IMG-10935326.jpg?v=1718925588",
    stock: 16,
    information:"Click para ver más detalles",
    description: "Diseño resistente con Ceramic Shield, Chip A14 Bionic, Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision",
},
{
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://ishop.gt/cdn/shop/files/IMG-11087766_2bde91e1-a9a8-4c4b-aa62-edd0944a19c2.jpg?v=1718923667",
    stock: 0,
    information:"Click para ver más detalles",
    description: "El iPad estrena nuevo look y te ofrece más posibilidades que nunca. Viene en cuatro colores vibrantes que van a alegrar tus días y tiene un nuevo diseño con una pantalla Liquid Retina de 10.9 pulgadas de borde a borde, perfecta para trabajar, darles forma a tus ideas y mantenerte en contacto con tu mundo.",
},
{
    id: "4",
    name: "Macbook Air",
    price: 2000,
    category: "computadora",
    img: "https://ishop.gt/cdn/shop/files/IMG-12444851_1aed3df0-5a2a-4375-b3cd-67254fc4ed6d.jpg?v=1718925160&width=823",
    stock: 0,
    information:"Click para ver más detalles",
    description: "El chip M3 llega a la MacBook Air de 15 pulgadas para potenciar lo que esta laptop superportátil es capaz de hacer. Y como ofrece hasta 18 horas de batería, podrás arrasar en cualquier tarea o jugar sin interrupciones en donde sea que te encuentres.",
},
{
    id: "5",
    name: "Google Pixel",
    price: 800,
    category: "celular",
    img: "https://m.media-amazon.com/images/I/610q+UV1bcL._AC_SY300_SX300_.jpg",
    stock: 16,
    information:"Click para ver más detalles",
    description: "La pantalla externa más grande e inteligente*. Hágalo todo sin abrir el teléfono, incluido el uso de formas impulsadas por moto ai para interactuar, capturar y crear.",
},
{
    id: "6",
    name: "Motorola Razor",
    price: 800,
    category: "celular",
    img: "https://m.media-amazon.com/images/I/615NWIiByFL._AC_SX679_.jpg",
    stock: 16,
    information:"Click para ver más detalles",
    description: "La pantalla externa más grande e inteligente*. Hágalo todo sin abrir el teléfono, incluido el uso de formas impulsadas por moto ai para interactuar, capturar y crear.",
},
{
    id: "7",
    name: "Galaxy Tab 10",
    price: 1200,
    category: "tablet",
    img: "https://m.media-amazon.com/images/I/61LVFxbwEPL._AC_UF1000,1000_QL80_.jpg",
    stock: 0,
    information:"Click para ver más detalles",
    description: "Descubre la Galaxy Tab S10+, una tablet con pantalla Dynamic AMOLED 2X de 12.4\", resolución WQXGA+, y 120Hz para una experiencia visual cinematográfica. Impulsada por el procesador Mediatek MT6989 y 12 GB de RAM, es ideal para tareas exigentes.",
},
{
    id: "8",
    name: "Ipad Mini",
    price: 1200,
    category: "tablet",
    img: "https://ishop.gt/cdn/shop/files/IMG-105651_3e741f65-9ba2-49c9-97c4-fa0be1389606.webp?v=1718899719&width=2048",
    stock: 0,
    information:"Click para ver más detalles",
    description: "iPad mini. Con una pantalla Liquid Retina de 8,3 pulgadas de borde a borde, el potente chip A15 Bionic con Neural Engine, ultra gran angular frontal de 12 Mpx con Encuadre Centrado y conectividad USB-C. Toma apuntes, anota documentos y escribe al instante tus grandes ideas con el Apple Pencil (2.ª generación), que se acopla de forma magnética y se carga sin cables.",
},
{
    id: "9",
    name: "Hp notebook",
    price: 3000,
    category: "computadora",
    img: "https://m.media-amazon.com/images/I/61Jt71WXgnL._AC_SX679_.jpg",
    stock: 0,
    information:"Click para ver más detalles",
    description: "Descripcion de computer4 GB DDR4-2400 SDRAM (1 x 4 GB); 64 GB de almacenamiento eMMC. Intel UHD Graphics 600 integrado; 1 lector de tarjetas SD multiformato; sin unidad óptica."
}
];

// obtener todos los productos
export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 1500);
});
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    console.log("getProductsbycategory ", categoryId)
return new Promise((resolve) => {
    setTimeout(() => {
        const prodTmp = products.filter((prod) => prod.category == categoryId);
        console.log("promise getProductsByCategory: ", prodTmp)
        resolve(prodTmp);
    }, 1500);
});
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        console.log("settimeout: ", productId)
    resolve(products.find((prod) => prod.id === productId));
    }, 1500);
});
};