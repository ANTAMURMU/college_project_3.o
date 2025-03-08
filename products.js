const products = [
    { name: "Paracetamol", description: "Effective for fever and pain relief.", price: 50 },
    { name: "Ibuprofen", description: "Anti-inflammatory and pain reliever.", price: 80 },
    { name: "Amoxicillin", description: "Antibiotic for bacterial infections.", price: 120 },
    { name: "Cetirizine", description: "Antihistamine for allergies.", price: 30 },
    { name: "Omeprazole", description: "For acid reflux and heartburn.", price: 90 },
    { name: "Aspirin", description: "Pain reliever and blood thinner.", price: 40 },
    { name: "Diazepam", description: "For anxiety and muscle spasms.", price: 150 },
    { name: "Loratadine", description: "Non-drowsy allergy relief.", price: 60 },
    { name: "Metformin", description: "For type 2 diabetes management.", price: 100 },
    { name: "Atorvastatin", description: "Lowers cholesterol levels.", price: 110 },
    { name: "Ciprofloxacin", description: "Antibiotic for infections.", price: 130 },
    { name: "Doxycycline", description: "Antibiotic for bacterial infections.", price: 140 },
    { name: "Levothyroxine", description: "Thyroid hormone replacement.", price: 70 },
    { name: "Losartan", description: "For high blood pressure.", price: 85 },
    { name: "Metronidazole", description: "Antibiotic for infections.", price: 95 },
    { name: "Pantoprazole", description: "Reduces stomach acid.", price: 75 },
    { name: "Ranitidine", description: "For heartburn and ulcers.", price: 55 },
    { name: "Sertraline", description: "Antidepressant.", price: 200 },
    { name: "Simvastatin", description: "Lowers cholesterol.", price: 105 },
    { name: "Tramadol", description: "Pain reliever.", price: 180 },
    { name: "Warfarin", description: "Blood thinner.", price: 160 },
    { name: "Zolpidem", description: "For insomnia.", price: 220 },
    { name: "Amlodipine", description: "For high blood pressure.", price: 90 },
    { name: "Clopidogrel", description: "Prevents blood clots.", price: 170 },
    { name: "Esomeprazole", description: "Reduces stomach acid.", price: 110 },
    { name: "Fluoxetine", description: "Antidepressant.", price: 130 },
    { name: "Gabapentin", description: "For nerve pain.", price: 140 },
    { name: "Hydrochlorothiazide", description: "Diuretic for high blood pressure.", price: 50 },
    { name: "Insulin Glargine", description: "Long-acting insulin.", price: 500 },
    { name: "Lisinopril", description: "For high blood pressure.", price: 80 },
    { name: "Montelukast", description: "For asthma and allergies.", price: 120 },
    { name: "Naproxen", description: "Anti-inflammatory pain reliever.", price: 70 },
    { name: "Olanzapine", description: "For schizophrenia and bipolar disorder.", price: 250 },
    { name: "Paroxetine", description: "Antidepressant.", price: 150 },
    { name: "Quetiapine", description: "For schizophrenia and bipolar disorder.", price: 230 },
    { name: "Risperidone", description: "For schizophrenia and bipolar disorder.", price: 210 },
    { name: "Tamsulosin", description: "For enlarged prostate.", price: 180 },
    { name: "Venlafaxine", description: "Antidepressant.", price: 190 },
    { name: "Albuterol", description: "For asthma and COPD.", price: 300 },
    { name: "Fulvestrant", description: "For cancer.", price: 2900 },
    { name: "Idelalisib", description: "For cancer.", price: 3000 },
    { name: "Lenvatinib", description: "For cancer.", price: 3100 },
    { name: "Olaparib", description: "For cancer.", price: 3200 },
    { name: "Palbociclib", description: "For cancer.", price: 3300 },
    { name: "Regorafenib", description: "For cancer.", price: 3400 },
    { name: "Trametinib", description: "For cancer.", price: 3500 },
    { name: "Vismodegib", description: "For cancer.", price: 3600 },
    { name: "Abiraterone", description: "For cancer.", price: 3700 },
    { name: "Bosutinib", description: "For cancer.", price: 3800 },
    { name: "Ceritinib", description: "For cancer.", price: 3900 },
    { name: "Dacomitinib", description: "For cancer.", price: 4000 },
    { name: "Everolimus", description: "For cancer.", price: 4100 },
    { name: "Fostamatinib", description: "For cancer.", price: 4200 },
    { name: "Glasdegib", description: "For cancer.", price: 4300 },
    { name: "Ivosidenib", description: "For cancer.", price: 4400 },
    { name: "Lorlatinib", description: "For cancer.", price: 4500 },
];

const productGrid = document.getElementById("product-grid");

// Function to display products
function displayProducts(filteredProducts) {
    productGrid.innerHTML = ""; // Clear the current product grid
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Generate image path dynamically
        const imagePath = `image/${product.name.toLowerCase()}.jpg`;

        productCard.innerHTML = `
            <img src="${imagePath}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        productGrid.appendChild(productCard);
    });
}

// Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Display all products initially
displayProducts(products);