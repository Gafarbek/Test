const products = [
    { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
    { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.7 },
    { id: 3, name: "Chair", price: 150, category: "furniture", rating: 4.2 },
    { id: 4, name: "Watch", price: 250, category: "accessories", rating: 4.0 },
    { id: 5, name: "Headphones", price: 100, category: "electronics", rating: 3.9 },
    { id: 6, name: "Sofa", price: 700, category: "furniture", rating: 4.3 },
];

/*
1. Используя метод filter, создайте новый массив, содержащий только те продукты,
   которые относятся к категории "electronics" и имеют рейтинг выше 4.6.
 
2. Используя метод find, найдите первый продукт, у которого цена ниже 200 и рейтинг выше 4.0.
 
3. С помощью метода map создайте новый массив, где для каждого продукта добавлено новое свойство "discountPrice".
   Для продуктов категории "electronics" применяется скидка 10% от цены, для остальных продуктов цена остается без изменений.
 
4. Используя метод reduce, сгруппируйте продукты по категориям.
   Результат должен быть объектом, где ключи — категории, а значения — массивы продуктов, принадлежащих к этой категории.
 
5. Проверьте, существует ли в массиве хотя бы один продукт из категории "furniture" с рейтингом ниже 4.0.
 
6. Отсортируйте массив продуктов по цене в порядке убывания, а затем с помощью метода map получите массив названий продуктов в этом порядке.
*/


//==== 1 ====\\

const filteredProducts = products.filter((item) => item.category === 'electronics' && item.rating > 4.6)

console.log(filteredProducts);

//==== 2 ====\\

const foundProduct = products.find(item => item.price < 200 && item.rating > 4.0)

console.log(foundProduct);

//==== 3 ====\\

const discountPrice = products.map(elem => {

    let discountPrice = elem.category === 'electronics' ? elem.price * 0.9 : elem.price

    return {...products, discountPrice}
})

console.log(discountPrice);

//==== 4 ====\\

// Четверты не сделал так как не особо знаком с reduce

//==== 5 ====\\

const hasLowRatedFurniture = products.filter(elem => elem.category === 'furniture' && elem.rating < 4.0)

console.log(hasLowRatedFurniture);

//==== 6 ====\\

const sortedProduct = products.slice().sort((a, b) => b.price - a.price).map(products => products.name)

console.log(sortedProduct);

