// let array = [
//   { gender: "male", name: "Bolo", age: 25 },
//   { gender: "male", name: "Samo", age: 8 },
//   { gender: "female", name: "Lolo", age: 25 },
//   { gender: "female", name: "Lilo", age: 7 },
//   { gender: "male", name: "Hakobik", age: 3 },
//   { gender: "female", name: "Laura", age: 32 },
//   { gender: "male", name: "Karen", age: 18 },
// ];

// let newArr = [];

// for (let val of array) {
//   if (val.age >= 18) newArr.push({ name: val.name });
// }

// console.log(newArr);

// task 2

// let array = [
//   { gender: "male", name: "Bolo", age: 25 },
//   { gender: "male", name: "Samo", age: 8 },
//   { gender: "female", name: "Lolo", age: 25 },
//   { gender: "female", name: "Lilo", age: 7 },
// ];

// let obj = { male: [], female: [] };

// for (let val of array) {
//   obj[val.gender].push({ name: val.name });
// }

// console.log(obj);

// task 3

const products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    brand: 1,
    category: 1,
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    brand: 1,
    category: 1,
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    brand: 2,
    category: 1,
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    brand: 4,
    category: 1,
  },
  {
    id: 5,
    title: "Huawei P30",
    price: 499,
    brand: 3,
    category: 1,
  },
  {
    id: 6,
    title: "MacBook Pro",
    price: 1749,
    brand: 1,
    category: 2,
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    price: 1499,
    brand: 2,
    category: 2,
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    price: 1499,
    brand: 5,
    category: 2,
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    price: 1099,
    brand: 8,
    category: 2,
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    price: 1099,
    brand: 6,
    category: 2,
  },
  {
    id: 11,
    title: "perfume Oil",
    price: 13,
    brand: 9,
    category: 4,
  },
  {
    id: 12,
    title: "Brown Perfume",
    price: 40,
    brand: 6,
    category: 4,
  },
  {
    id: 13,
    title: "Skullcandy Jib True 2",
    price: 38,
    brand: 6,
    category: 3,
  },
  {
    id: 14,
    title: "Gelius Pro Crossfire GP HP-007",
    price: 19,
    brand: 7,
    category: 3,
  },
  {
    id: 15,
    title: "Gelius Pro Airdots One GP-TWS003",
    price: 22,
    brand: 7,
    category: 3,
  },
  {
    id: 16,
    title: "Book Air 13",
    price: 40,
    brand: 7,
    category: 2,
  },
];

const brands = [
  {
    id: 1,
    title: "Apple",
  },
  {
    id: 2,
    title: "Samsung",
  },
  {
    id: 3,
    title: "Huawei",
  },
  {
    id: 4,
    title: "OPPO",
  },
  {
    id: 5,
    title: "Microsoft Surface",
  },
  {
    id: 6,
    title: "HP",
  },
  {
    id: 7,
    title: "Xiaomi",
  },
  {
    id: 8,
    title: "Infinix",
  },
  {
    id: 9,
    title: "Impression of Acqua Di Gio",
  },
];

const categories = {
  1: "smartphones",
  2: "laptops",
  3: "headphones",
  4: "fragrances",
};

const arr = [];

for (let i of products) {
  arr.push({
    id: i.id,
    title: i.title,
    price: i.price,
    brand: i.brand,
    category: categories[i.category],
  });
}

console.log(arr);
