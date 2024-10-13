const productsArray = [
    {
      id: 1,
      name: "iPhone 12 Pro",
      price: 999,
      image: "https://placehold.co/400x300?text=iPhone+12+Pro"
    },
    {
      id: 2,
      name: "iPad Pro (5th gen)",
      price: 1099,
      image: "https://placehold.co/400x300?text=iPad+Pro+12.9-inch+(5th+generation)"
    },
    {
      id: 3,
      name: "MacBook Pro 14-inch",
      price: 1999,
      image: "https://placehold.co/400x300?text=MacBook+Pro+14-inch"
    },
    {
      id: 4,
      name: "iPhone 14 Pro Max",
      price: 1195,
      image: "https://placehold.co/400x300?text=iPhone+14+Pro+Max"
    },
    {
      id: 5,
      name: "iPhone 14",
      price: 789,
      image: "https://placehold.co/400x300?text=iPhone+14"
    },
    {
      id: 6,
      name: "Samsung S22 Ultra",
      price: 764,
      image: "https://placehold.co/400x300?text=Samsung+Galaxy+S22+Ultra"
    }
    ,
    {
      id: 7,
      name: "iPhone 15",
      price: 850,
      image: "https://placehold.co/400x300?text=Samsung+Galaxy+S22+Ultra"
    }
    ,
    {
      id: 8,
      name: "iPhone 16",
      price: 975,
      image: "https://placehold.co/400x300?text=Samsung+Galaxy+S22+Ultra"
    }
  ];
  
function getProductData(id)
{
  let prodData=productsArray.find(prod => prod.id ===id)
  return prodData;
}

export {productsArray,getProductData};