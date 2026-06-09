// ==========================================
// PRODUCT MANAGEMENT ASSIGNMENT
// ==========================================

let products = [
    { name: "laptop", price: 78000 },
    { name: "tab", price: 7800 },
    { name: "mobile", price: 58000 }
];

// ==========================================
// 1. Search product by name
// ==========================================
console.log("\n1. Search Product by Name");
let productByName = products.find(p => p.name === "mobile");
console.log(productByName);

// ==========================================
// 2. Search product by price
// ==========================================
console.log("\n2. Search Product by Price");
let productByPrice = products.find(p => p.price === 7800);
console.log(productByPrice);

// ==========================================
// 3. Display all products whose price is above ₹5000
// ==========================================
console.log("\n3. Products Above ₹5000");
let above5000 = products.filter(p => p.price > 5000);
console.log(above5000);

// ==========================================
// 4. Display all products whose price is below ₹5000
// ==========================================
console.log("\n4. Products Below ₹5000");
let below5000 = products.filter(p => p.price < 5000);
console.log(below5000);

// ==========================================
// 5. Count total products
// ==========================================
console.log("\n5. Total Products");
console.log(products.length);

// ==========================================
// 6. Find the most expensive product
// ==========================================
console.log("\n6. Most Expensive Product");
let maxProduct = products.reduce((a, b) =>
    a.price > b.price ? a : b
);
console.log(maxProduct);

// ==========================================
// 7. Find the cheapest product
// ==========================================
console.log("\n7. Cheapest Product");
let minProduct = products.reduce((a, b) =>
    a.price < b.price ? a : b
);
console.log(minProduct);

// ==========================================
// 8. Add a new product object
// ==========================================
console.log("\n8. Add New Product");
products.push({
    name: "watch",
    price: 12000
});
console.log(products);

// ==========================================
// 9. Delete a product by name
// ==========================================
console.log("\n9. Delete Product By Name");
products = products.filter(p => p.name !== "tab");
console.log(products);

// ==========================================
// 10. Update product price by product name
// ==========================================
console.log("\n10. Update Product Price");

products.forEach(p => {
    if (p.name === "mobile") {
        p.price = 60000;
    }
});

console.log(products);

// ==========================================
// 11. Display only product names
// ==========================================
console.log("\n11. Product Names");

let names = products.map(p => p.name);
console.log(names);

// ==========================================
// 12. Display only product prices
// ==========================================
console.log("\n12. Product Prices");

let prices = products.map(p => p.price);
console.log(prices);

// ==========================================
// 13. Check whether a product exists or not
// ==========================================
console.log("\n13. Product Exists?");

let exists = products.some(p => p.name === "mobile");
console.log(exists);

// ==========================================
// 14. Create Good Quality and Low Quality categories
// ==========================================
console.log("\n14. Product Quality");

let qualityProducts = products.map(p => ({
    name: p.name,
    price: p.price,
    quality: p.price >= 50000
        ? "Good Quality"
        : "Low Quality"
}));

console.log(qualityProducts);

// ==========================================
// 15. Search products between ₹5000 and ₹50000
// ==========================================
console.log("\n15. Products Between ₹5000 and ₹50000");

let rangeProducts = products.filter(
    p => p.price >= 5000 && p.price <= 50000
);

console.log(rangeProducts);

// ==========================================
// 16. Sort products by price ascending
// ==========================================
console.log("\n16. Ascending Order");

let ascending = [...products].sort(
    (a, b) => a.price - b.price
);

console.log(ascending);

// ==========================================
// 17. Sort products by price descending
// ==========================================
console.log("\n17. Descending Order");

let descending = [...products].sort(
    (a, b) => b.price - a.price
);

console.log(descending);

// ==========================================
// 18. Display products with 18% GST added
// ==========================================
console.log("\n18. Products with GST");

let gstProducts = products.map(p => ({
    name: p.name,
    price: p.price,
    priceWithGST: p.price * 1.18
}));

console.log(gstProducts);

// ==========================================
// 19. Calculate total inventory value
// ==========================================
console.log("\n19. Total Inventory Value");

let totalValue = products.reduce(
    (sum, p) => sum + p.price,
    0
);

console.log(totalValue);

// ==========================================
// 20. Create a product report showing name,
// price and quality
// ==========================================
console.log("\n20. Product Report");

let report = products.map(p => ({
    name: p.name,
    price: p.price,
    quality: p.price >= 50000
        ? "Good Quality"
        : "Low Quality"
}));

console.log(report);
