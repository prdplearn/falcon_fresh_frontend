import { babyCare, BulkDeals, CleanSupp, FrozenFood, Fruit, Harpic, Product1, Product2, Product3, Product4, Product5, salt, Spices, Sprite, Water } from '@/assets/images';

export const categoryData = [
    {
        id: 1,
        Name: "Baby Care",
        items: 52,
        categoryImage: babyCare,
        catColor: "#F2FCE4"
    },
    {
        id: 2,
        Name: "Cleaning Supplies",
        items: 41,
        categoryImage: CleanSupp,
        catColor: "#ECFFEC"
    },
    {
        id: 3,
        Name: "Water",
        items: 37,
        categoryImage: Water,
        catColor: "#FEEFEA"
    },
    {
        id: 4,
        Name: "Masalas & Spices",
        items: 154,
        categoryImage: Spices,
        catColor: "#FFF3FF"
    },
    {
        id: 5,
        Name: "Salt, Sugar & Jaggery",
        items: 37,
        categoryImage: salt,
        catColor: "#F2FCE4"
    },
    {
        id: 6,
        Name: "Frozen Foods",
        items: 85,
        categoryImage: FrozenFood,
        catColor: "#E4FAFC"
    },
    {
        id: 7,
        Name: "Bulk Deals",
        items: 401,
        categoryImage: BulkDeals,
        catColor: "#E4EEFC"
    },
    {
        id: 8,
        Name: "Bulk Deals",
        items: 200,
        categoryImage: salt,
        catColor: "#E4EEFe"
    },
]

// Product Data 

export const productData = [
    {
        id: 1,
        Name: "Lacnor Essentials Orange Juice 180ml (Pack of 8)",
        price: 12.60,
        salePrice: 15.50,
        isSale: true,
        productImage: Product1,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 2,
        Name: "Al Marai Long Life Milk Low Fat 1L [1x12]",
        price: 57.99,
        salePrice: 72.00,
        isSale: true,
        productImage: Product2,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 3,
        Name: "Sting Energy Drink 250ml (Pack of 30pcs)",
        price: 53.49,
        salePrice: 56.9,
        isSale: false,
        productImage: Product3,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 4,
        Name: "Schweppes Tonic Water Can 6 Cans outer",
        price: 12.60,
        salePrice: 15.50,
        isSale: false,
        productImage: Product4,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 5,
        Name: "IndoFood Extra Hot Chili Sauce 24 x 340ml",
        price: 12.60,
        salePrice: 15.50,
        isSale: true,
        productImage: Product5,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 6,
        Name: "Al Marai Long Life Milk Low Fat 1L [1x12]",
        price: 12.60,
        salePrice: 15.50,
        isSale: false,
        productImage: Product1,
        catColor: "#F2FCE4",
        btnLink: ""
    },
    {
        id: 7,
        Name: "IndoFood Extra Hot Chili Sauce 24 x 340ml",
        price: 12.60,
        salePrice: 15.50,
        isSale: true,
        productImage: Product4,
        catColor: "#F2FCE4",
        btnLink: ""
    },

]

export const adsData = [
    {
        id: 1,
        name: "Sprite Box  of 30",
        price: 47.3,
        salePrice: 63,
        isOne:"120px",
        productImage: Sprite,
        btnLink: "",
        adsColor: "#F8F0DB"
    },
    {
        id: 2,
        name: "Harpic Pack of 3",
        price: 24,
        salePrice: 28,
        isOne: "110px",
        adsColor: "#CDDCDF",
        productImage: Harpic,
        btnLink: ""
    },
    {
        id: 3,
        name: "The best Organic Products Online",
        adsColor: "#E7EAF2",
        productImage: Fruit,
        btnLink: ""
    },
]