// Application State
let appState = {
    ingredients: [
        {"name": "Beef Mince", "category": "Meat & Fish", "unit": "g", "low": 250, "medium": 500, "high": 1000, "current_level": "medium", "current_amount": 500},
        {"name": "Chicken Breast", "category": "Meat & Fish", "unit": "pieces", "low": 2, "medium": 4, "high": 8, "current_level": "high", "current_amount": 6},
        {"name": "Lamb Mince", "category": "Meat & Fish", "unit": "g", "low": 250, "medium": 500, "high": 750, "current_level": "low", "current_amount": 200},
        {"name": "Salmon Fillets", "category": "Meat & Fish", "unit": "pieces", "low": 1, "medium": 2, "high": 4, "current_level": "medium", "current_amount": 2},
        {"name": "Cod Fillets", "category": "Meat & Fish", "unit": "pieces", "low": 1, "medium": 2, "high": 4, "current_level": "low", "current_amount": 1},
        {"name": "Tuna (tinned)", "category": "Meat & Fish", "unit": "tins", "low": 1, "medium": 3, "high": 6, "current_level": "high", "current_amount": 5},
        {"name": "Onions", "category": "Vegetables", "unit": "pieces", "low": 2, "medium": 5, "high": 10, "current_level": "medium", "current_amount": 4},
        {"name": "Carrots", "category": "Vegetables", "unit": "pieces", "low": 3, "medium": 6, "high": 12, "current_level": "high", "current_amount": 8},
        {"name": "Garlic", "category": "Vegetables", "unit": "bulbs", "low": 1, "medium": 2, "high": 3, "current_level": "medium", "current_amount": 1},
        {"name": "Sweet Potatoes", "category": "Vegetables", "unit": "pieces", "low": 2, "medium": 4, "high": 8, "current_level": "low", "current_amount": 1},
        {"name": "Potatoes", "category": "Vegetables", "unit": "kg", "low": 1, "medium": 2, "high": 5, "current_level": "high", "current_amount": 3},
        {"name": "Celery", "category": "Vegetables", "unit": "sticks", "low": 2, "medium": 4, "high": 8, "current_level": "medium", "current_amount": 4},
        {"name": "Mushrooms", "category": "Vegetables", "unit": "g", "low": 200, "medium": 400, "high": 800, "current_level": "low", "current_amount": 150},
        {"name": "Red Peppers", "category": "Vegetables", "unit": "pieces", "low": 1, "medium": 3, "high": 6, "current_level": "medium", "current_amount": 2},
        {"name": "Courgettes", "category": "Vegetables", "unit": "pieces", "low": 1, "medium": 2, "high": 4, "current_level": "low", "current_amount": 1},
        {"name": "Spinach", "category": "Vegetables", "unit": "bags", "low": 1, "medium": 2, "high": 4, "current_level": "medium", "current_amount": 2},
        {"name": "Cherry Tomatoes", "category": "Vegetables", "unit": "punnet", "low": 1, "medium": 2, "high": 4, "current_level": "high", "current_amount": 3},
        {"name": "Pasta (Spaghetti)", "category": "Pantry", "unit": "g", "low": 250, "medium": 500, "high": 1000, "current_level": "high", "current_amount": 750},
        {"name": "Lasagne Sheets", "category": "Pantry", "unit": "sheets", "low": 6, "medium": 12, "high": 24, "current_level": "medium", "current_amount": 12},
        {"name": "Rice (Basmati)", "category": "Pantry", "unit": "kg", "low": 0.5, "medium": 1, "high": 2, "current_level": "low", "current_amount": 0.3},
        {"name": "Plain Flour", "category": "Pantry", "unit": "kg", "low": 0.5, "medium": 1, "high": 1.5, "current_level": "medium", "current_amount": 0.8},
        {"name": "Olive Oil", "category": "Pantry", "unit": "ml", "low": 100, "medium": 250, "high": 500, "current_level": "medium", "current_amount": 300},
        {"name": "Chopped Tomatoes (tinned)", "category": "Pantry", "unit": "tins", "low": 2, "medium": 4, "high": 8, "current_level": "high", "current_amount": 6},
        {"name": "Tomato Purée", "category": "Pantry", "unit": "tubes", "low": 1, "medium": 2, "high": 3, "current_level": "medium", "current_amount": 1},
        {"name": "Stock Cubes (Beef)", "category": "Pantry", "unit": "cubes", "low": 4, "medium": 8, "high": 16, "current_level": "low", "current_amount": 3},
        {"name": "Stock Cubes (Chicken)", "category": "Pantry", "unit": "cubes", "low": 4, "medium": 8, "high": 16, "current_level": "medium", "current_amount": 6},
        {"name": "Worcestershire Sauce", "category": "Pantry", "unit": "bottles", "low": 1, "medium": 1, "high": 2, "current_level": "high", "current_amount": 1},
        {"name": "Kidney Beans", "category": "Canned Goods", "unit": "tins", "low": 1, "medium": 3, "high": 6, "current_level": "medium", "current_amount": 2},
        {"name": "Cannellini Beans", "category": "Canned Goods", "unit": "tins", "low": 1, "medium": 2, "high": 4, "current_level": "low", "current_amount": 1},
        {"name": "Chickpeas", "category": "Canned Goods", "unit": "tins", "low": 1, "medium": 3, "high": 6, "current_level": "high", "current_amount": 4},
        {"name": "Sweetcorn", "category": "Canned Goods", "unit": "tins", "low": 1, "medium": 2, "high": 4, "current_level": "medium", "current_amount": 2},
        {"name": "Baked Beans", "category": "Canned Goods", "unit": "tins", "low": 2, "medium": 4, "high": 8, "current_level": "high", "current_amount": 6},
        {"name": "Eggs", "category": "Dairy & Eggs", "unit": "pieces", "low": 6, "medium": 12, "high": 24, "current_level": "medium", "current_amount": 8},
        {"name": "Milk", "category": "Dairy & Eggs", "unit": "litres", "low": 1, "medium": 2, "high": 4, "current_level": "low", "current_amount": 0.5},
        {"name": "Butter", "category": "Dairy & Eggs", "unit": "blocks", "low": 1, "medium": 2, "high": 3, "current_level": "medium", "current_amount": 1},
        {"name": "Cheddar Cheese", "category": "Dairy & Eggs", "unit": "g", "low": 200, "medium": 400, "high": 800, "current_level": "high", "current_amount": 600},
        {"name": "Parmesan Cheese", "category": "Dairy & Eggs", "unit": "g", "low": 100, "medium": 200, "high": 300, "current_level": "medium", "current_amount": 150},
        {"name": "Mozzarella", "category": "Dairy & Eggs", "unit": "balls", "low": 1, "medium": 2, "high": 4, "current_level": "low", "current_amount": 1},
        {"name": "Salt", "category": "Herbs & Spices", "unit": "containers", "low": 1, "medium": 1, "high": 2, "current_level": "high", "current_amount": 1},
        {"name": "Black Pepper", "category": "Herbs & Spices", "unit": "containers", "low": 1, "medium": 1, "high": 2, "current_level": "medium", "current_amount": 1},
        {"name": "Mixed Herbs", "category": "Herbs & Spices", "unit": "jars", "low": 1, "medium": 1, "high": 2, "current_level": "medium", "current_amount": 1},
        {"name": "Oregano", "category": "Herbs & Spices", "unit": "jars", "low": 1, "medium": 1, "high": 2, "current_level": "low", "current_amount": 1},
        {"name": "Thyme", "category": "Herbs & Spices", "unit": "jars", "low": 1, "medium": 1, "high": 2, "current_level": "high", "current_amount": 1},
        {"name": "Paprika", "category": "Herbs & Spices", "unit": "jars", "low": 1, "medium": 1, "high": 2, "current_level": "medium", "current_amount": 1},
        {"name": "Garlic Powder", "category": "Herbs & Spices", "unit": "jars", "low": 1, "medium": 1, "high": 2, "current_level": "low", "current_amount": 1},
        {"name": "Frozen Peas", "category": "Frozen", "unit": "bags", "low": 1, "medium": 2, "high": 4, "current_level": "medium", "current_amount": 2},
        {"name": "Frozen Sweetcorn", "category": "Frozen", "unit": "bags", "low": 1, "medium": 2, "high": 3, "current_level": "high", "current_amount": 2},
        {"name": "Fish Fingers", "category": "Frozen", "unit": "boxes", "low": 1, "medium": 2, "high": 3, "current_level": "low", "current_amount": 1}
    ],
    recipes: [
        {
            "id": 1,
            "name": "Classic Lasagne",
            "prep_time": "30 mins",
            "cook_time": "1 hour",
            "serves": 4,
            "ingredients": [
                {"name": "Beef Mince", "amount": 500, "unit": "g"},
                {"name": "Lasagne Sheets", "amount": 12, "unit": "sheets"},
                {"name": "Onions", "amount": 1, "unit": "pieces"},
                {"name": "Carrots", "amount": 1, "unit": "pieces"},
                {"name": "Garlic", "amount": 2, "unit": "cloves"},
                {"name": "Chopped Tomatoes (tinned)", "amount": 2, "unit": "tins"},
                {"name": "Tomato Purée", "amount": 1, "unit": "tbsp"},
                {"name": "Cheddar Cheese", "amount": 200, "unit": "g"},
                {"name": "Mozzarella", "amount": 1, "unit": "balls"},
                {"name": "Olive Oil", "amount": 2, "unit": "tbsp"},
                {"name": "Mixed Herbs", "amount": 1, "unit": "tsp"}
            ]
        },
        {
            "id": 2,
            "name": "Spaghetti Bolognese",
            "prep_time": "15 mins",
            "cook_time": "40 mins",
            "serves": 4,
            "ingredients": [
                {"name": "Beef Mince", "amount": 400, "unit": "g"},
                {"name": "Pasta (Spaghetti)", "amount": 400, "unit": "g"},
                {"name": "Onions", "amount": 1, "unit": "pieces"},
                {"name": "Carrots", "amount": 1, "unit": "pieces"},
                {"name": "Garlic", "amount": 2, "unit": "cloves"},
                {"name": "Chopped Tomatoes (tinned)", "amount": 2, "unit": "tins"},
                {"name": "Tomato Purée", "amount": 2, "unit": "tbsp"},
                {"name": "Stock Cubes (Beef)", "amount": 1, "unit": "cubes"},
                {"name": "Olive Oil", "amount": 2, "unit": "tbsp"},
                {"name": "Mixed Herbs", "amount": 1, "unit": "tsp"}
            ]
        },
        {
            "id": 3,
            "name": "Steak, Egg & Sweet Potato",
            "prep_time": "10 mins",
            "cook_time": "25 mins",
            "serves": 2,
            "ingredients": [
                {"name": "Beef Steak", "amount": 2, "unit": "pieces"},
                {"name": "Sweet Potatoes", "amount": 2, "unit": "pieces"},
                {"name": "Eggs", "amount": 2, "unit": "pieces"},
                {"name": "Olive Oil", "amount": 3, "unit": "tbsp"},
                {"name": "Salt", "amount": 1, "unit": "tsp"},
                {"name": "Black Pepper", "amount": 1, "unit": "tsp"},
                {"name": "Thyme", "amount": 0.5, "unit": "tsp"}
            ]
        },
        {
            "id": 4,
            "name": "Shepherd's Pie",
            "prep_time": "20 mins",
            "cook_time": "1 hour 15 mins",
            "serves": 6,
            "ingredients": [
                {"name": "Lamb Mince", "amount": 500, "unit": "g"},
                {"name": "Potatoes", "amount": 800, "unit": "g"},
                {"name": "Onions", "amount": 2, "unit": "pieces"},
                {"name": "Carrots", "amount": 3, "unit": "pieces"},
                {"name": "Garlic", "amount": 1, "unit": "cloves"},
                {"name": "Stock Cubes (Beef)", "amount": 1, "unit": "cubes"},
                {"name": "Chopped Tomatoes (tinned)", "amount": 1, "unit": "tins"},
                {"name": "Tomato Purée", "amount": 1, "unit": "tsp"},
                {"name": "Worcestershire Sauce", "amount": 0.25, "unit": "tsp"},
                {"name": "Butter", "amount": 25, "unit": "g"},
                {"name": "Milk", "amount": 4, "unit": "tbsp"},
                {"name": "Cheddar Cheese", "amount": 40, "unit": "g"}
            ]
        },
        {
            "id": 5,
            "name": "Fish & Chips",
            "prep_time": "10 mins",
            "cook_time": "40 mins",
            "serves": 4,
            "ingredients": [
                {"name": "Cod Fillets", "amount": 4, "unit": "pieces"},
                {"name": "Potatoes", "amount": 4, "unit": "pieces"},
                {"name": "Plain Flour", "amount": 75, "unit": "g"},
                {"name": "Eggs", "amount": 1, "unit": "pieces"},
                {"name": "Olive Oil", "amount": 1, "unit": "tbsp"},
                {"name": "Salt", "amount": 1, "unit": "tsp"},
                {"name": "Black Pepper", "amount": 1, "unit": "tsp"}
            ]
        },
        {
            "id": 6,
            "name": "Roast Chicken Dinner",
            "prep_time": "15 mins",
            "cook_time": "1 hour",
            "serves": 4,
            "ingredients": [
                {"name": "Chicken Breast", "amount": 4, "unit": "pieces"},
                {"name": "Potatoes", "amount": 8, "unit": "pieces"},
                {"name": "Carrots", "amount": 4, "unit": "pieces"},
                {"name": "Onions", "amount": 1, "unit": "pieces"},
                {"name": "Garlic", "amount": 2, "unit": "cloves"},
                {"name": "Olive Oil", "amount": 4, "unit": "tbsp"},
                {"name": "Thyme", "amount": 1, "unit": "tsp"},
                {"name": "Salt", "amount": 1, "unit": "tsp"},
                {"name": "Black Pepper", "amount": 1, "unit": "tsp"}
            ]
        },
        {
            "id": 7,
            "name": "Chicken Curry",
            "prep_time": "15 mins",
            "cook_time": "30 mins",
            "serves": 4,
            "ingredients": [
                {"name": "Chicken Breast", "amount": 4, "unit": "pieces"},
                {"name": "Rice (Basmati)", "amount": 300, "unit": "g"},
                {"name": "Onions", "amount": 2, "unit": "pieces"},
                {"name": "Garlic", "amount": 3, "unit": "cloves"},
                {"name": "Chopped Tomatoes (tinned)", "amount": 1, "unit": "tins"},
                {"name": "Coconut Milk", "amount": 1, "unit": "tin"},
                {"name": "Olive Oil", "amount": 2, "unit": "tbsp"},
                {"name": "Curry Powder", "amount": 2, "unit": "tsp"}
            ]
        },
        {
            "id": 8,
            "name": "Tuna Pasta Bake",
            "prep_time": "15 mins",
            "cook_time": "25 mins",
            "serves": 4,
            "ingredients": [
                {"name": "Pasta (Penne)", "amount": 300, "unit": "g"},
                {"name": "Tuna (tinned)", "amount": 2, "unit": "tins"},
                {"name": "Sweetcorn", "amount": 1, "unit": "tins"},
                {"name": "Cheddar Cheese", "amount": 200, "unit": "g"},
                {"name": "Milk", "amount": 300, "unit": "ml"},
                {"name": "Butter", "amount": 25, "unit": "g"},
                {"name": "Plain Flour", "amount": 25, "unit": "g"}
            ]
        },
        {
            "id": 9,
            "name": "Vegetable Stir Fry",
            "prep_time": "10 mins",
            "cook_time": "15 mins",
            "serves": 2,
            "ingredients": [
                {"name": "Red Peppers", "amount": 2, "unit": "pieces"},
                {"name": "Courgettes", "amount": 1, "unit": "pieces"},
                {"name": "Mushrooms", "amount": 200, "unit": "g"},
                {"name": "Onions", "amount": 1, "unit": "pieces"},
                {"name": "Garlic", "amount": 2, "unit": "cloves"},
                {"name": "Rice (Basmati)", "amount": 200, "unit": "g"},
                {"name": "Olive Oil", "amount": 3, "unit": "tbsp"},
                {"name": "Soy Sauce", "amount": 2, "unit": "tbsp"}
            ]
        }
    ],
    shoppingList: [],
    currentEditingIngredient: null,
    ingredientModalCallback: null,
    isNewIngredient: false,
    currentEditingRecipe: null,
    isNewRecipe: false
};

const STORAGE_KEY = 'ingredient-tracker-state';

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
        const data = JSON.parse(saved);
        if (data.ingredients) appState.ingredients = data.ingredients;
        if (data.shoppingList) {
            appState.shoppingList = data.shoppingList.map(item => ({
                id: item.id ?? Date.now() + Math.random(),
                ...item,
                qty: item.qty ?? item.amount ?? 1,
                selectedUnit: item.selectedUnit ?? item.unit ?? ''
            }));
        }
        if (data.recipes) appState.recipes = data.recipes;
        // ensure new properties persist
        saveState();
    } catch (err) {
        console.warn('Failed to parse saved state', err);
    }
}

function saveState() {
    const data = {
        ingredients: appState.ingredients,
        shoppingList: appState.shoppingList,
        recipes: appState.recipes
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    initializeNavigation();
    updateDashboard();
    renderInventory();
    renderIngredientOptions();
    renderRecipes();
    initializeModals();
    initializeShoppingList();
    initializeRecipeImport();
    initializeRecipeSelection();
    initializeRecipeEditing();
    initializeSettings();
});

// Navigation
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            showPage(targetPage);
            
            // Close mobile menu
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function showPage(pageId) {
    // Update navigation
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[href="#${pageId}"]`).classList.add('active');
    
    // Update pages
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    // Refresh page content
    switch(pageId) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'inventory':
            renderInventory();
            break;
        case 'recipes':
            renderRecipes();
            break;
        case 'shopping':
            renderShoppingList();
            break;
    }
}

// Dashboard Functions
function updateDashboard() {
    const stats = calculateStats();
    
    document.getElementById('lowCount').textContent = stats.low;
    document.getElementById('mediumCount').textContent = stats.medium;
    document.getElementById('highCount').textContent = stats.high;
    
    renderLowStockItems();
}

function calculateStats() {
    return appState.ingredients.reduce((stats, ingredient) => {
        stats[ingredient.current_level]++;
        return stats;
    }, { low: 0, medium: 0, high: 0 });
}

function renderLowStockItems() {
    const lowStockContainer = document.getElementById('lowStockItems');
    const lowStockItems = appState.ingredients.filter(item => item.current_level === 'low');
    
    if (lowStockItems.length === 0) {
        lowStockContainer.innerHTML = '<p class="text-secondary">All ingredients are well stocked!</p>';
        return;
    }
    
    lowStockContainer.innerHTML = lowStockItems.map(item => `
        <div class="low-stock-item">
            <div>
                <strong>${item.name}</strong>
                <div class="text-secondary">${item.current_amount} ${item.unit}</div>
            </div>
            <button class="btn btn--sm btn--outline" onclick="openIngredientModal('${item.name}')">
                Update
            </button>
        </div>
    `).join('');
}

// Inventory Functions
function renderInventory() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    
    let filteredIngredients = appState.ingredients.filter(ingredient => {
        const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || ingredient.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = filteredIngredients.map(ingredient => `
        <div class="ingredient-item" onclick="openIngredientModal('${ingredient.name}')">
            <div class="ingredient-header">
                <div>
                    <div class="ingredient-name">${ingredient.name}</div>
                    <div class="ingredient-category">${ingredient.category}</div>
                </div>
                <div class="stock-level ${ingredient.current_level}">${ingredient.current_level}</div>
            </div>
            <div class="ingredient-stock">
                <div class="stock-amount">${ingredient.current_amount} ${ingredient.unit}</div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for search and filter
    if (document.getElementById('searchInput')) {
        document.getElementById('searchInput').addEventListener('input', renderInventory);
        document.getElementById('categoryFilter').addEventListener('change', renderInventory);
    }
}

function renderIngredientOptions() {
    const list = document.getElementById('ingredientOptions');
    if (!list) return;
    list.innerHTML = appState.ingredients.map(ing => `<option value="${ing.name}"></option>`).join('');
}

// Recipe Functions
function renderRecipes() {
    const recipesList = document.getElementById('recipesList');
    
    const recipesWithAvailability = appState.recipes.map(recipe => {
        const availability = checkRecipeAvailability(recipe);
        return { ...recipe, availability };
    });
    
    recipesList.innerHTML = recipesWithAvailability.map(recipe => `
        <div class="recipe-card" onclick="openRecipeModal(${recipe.id})">
            <div class="recipe-header">
                <div>
                    <div class="recipe-title">${recipe.name}</div>
                    <div class="recipe-meta">
                        <span>Prep: ${recipe.prep_time}</span>
                        <span>Cook: ${recipe.cook_time}</span>
                        <span>Serves: ${recipe.serves}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="edit" onclick="editRecipe(${recipe.id});event.stopPropagation()">✏</button>
                        <button onclick="deleteRecipe(${recipe.id});event.stopPropagation()">✗</button>
                    </div>
                </div>
                <div class="recipe-select" onclick="event.stopPropagation()">
                    <input type="checkbox" class="recipe-check" data-id="${recipe.id}">
                    <input type="number" min="1" value="1" class="recipe-qty" data-id="${recipe.id}">
                </div>
            </div>
            <div class="recipe-body">
                <div class="recipe-availability">
                    <div class="availability-score ${recipe.availability.level}">
                        ${recipe.availability.available}/${recipe.availability.total} ingredients available
                    </div>
                </div>
                <div class="ingredient-status">
                    ${recipe.availability.ingredients.slice(0, 5).map(ing => `
                        <div class="ingredient-chip ${ing.status}">${ing.name}</div>
                    `).join('')}
                    ${recipe.availability.ingredients.length > 5 ? `<div class="ingredient-chip">+${recipe.availability.ingredients.length - 5} more</div>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function checkRecipeAvailability(recipe) {
    const ingredients = recipe.ingredients.map(recipeIngredient => {
        const stockIngredient = findIngredientByName(recipeIngredient.name);
        
        if (!stockIngredient) {
            return { ...recipeIngredient, status: 'missing', available: false };
        }
        
        const hasEnough = stockIngredient.current_amount >= (recipeIngredient.amount || 1);
        const isLow = stockIngredient.current_level === 'low';
        
        let status = 'available';
        if (!hasEnough) status = 'missing';
        else if (isLow) status = 'low';
        
        return { 
            ...recipeIngredient, 
            status, 
            available: hasEnough,
            stockLevel: stockIngredient.current_level 
        };
    });
    
    const availableCount = ingredients.filter(ing => ing.available).length;
    const totalCount = ingredients.length;
    const percentage = (availableCount / totalCount) * 100;
    
    let level = 'low';
    if (percentage >= 80) level = 'high';
    else if (percentage >= 50) level = 'medium';
    
    return {
        ingredients,
        available: availableCount,
        total: totalCount,
        percentage,
        level
    };
}

function findIngredientByName(name) {
    return appState.ingredients.find(ing => ing.name.toLowerCase() === name.toLowerCase());
}

// Modal Functions
function initializeModals() {
    // Ingredient Modal
    const ingredientModal = document.getElementById('ingredientModal');
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    const modalSave = document.getElementById('modalSave');
    const decreaseBtn = document.getElementById('decreaseAmount');
    const increaseBtn = document.getElementById('increaseAmount');
    const amountInput = document.getElementById('currentAmount');
    const lowInput = document.getElementById('lowTrigger');
    const mediumInput = document.getElementById('mediumTrigger');
    const highInput = document.getElementById('highTrigger');
    
    modalClose.addEventListener('click', closeIngredientModal);
    modalCancel.addEventListener('click', closeIngredientModal);
    modalSave.addEventListener('click', saveIngredientUpdate);
    
    decreaseBtn.addEventListener('click', () => adjustAmount(-1));
    increaseBtn.addEventListener('click', () => adjustAmount(1));
    amountInput.addEventListener('input', updateStockLevel);
    if (lowInput) lowInput.addEventListener('input', updateStockLevel);
    if (mediumInput) mediumInput.addEventListener('input', updateStockLevel);
    if (highInput) highInput.addEventListener('input', updateStockLevel);
    
    // Recipe Modal
    const recipeModal = document.getElementById('recipeModal');
    const recipeModalClose = document.getElementById('recipeModalClose');
    const recipeModalClose2 = document.getElementById('recipeModalClose2');
    const addMissingBtn = document.getElementById('addMissingToShopping');
    
    recipeModalClose.addEventListener('click', closeRecipeModal);
    recipeModalClose2.addEventListener('click', closeRecipeModal);
    addMissingBtn.addEventListener('click', addMissingIngredientsToShopping);
    
    // Close modals on background click
    ingredientModal.addEventListener('click', (e) => {
        if (e.target === ingredientModal) closeIngredientModal();
    });
    
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) closeRecipeModal();
    });
}

function openIngredientModal(data, isNew = false, callback = null) {
    let ingredient;
    if (typeof data === 'string' && !isNew) {
        ingredient = findIngredientByName(data);
        if (!ingredient) return;
    } else {
        ingredient = typeof data === 'object' ? data : { name: data };
    }

    appState.currentEditingIngredient = ingredient;
    appState.ingredientModalCallback = callback;
    appState.isNewIngredient = isNew;

    document.getElementById('modalTitle').textContent = isNew ? `Add ${ingredient.name}` : `Update ${ingredient.name}`;
    document.getElementById('ingredientName').value = ingredient.name;
    document.getElementById('ingredientCategory').value = ingredient.category;
    document.getElementById('currentAmount').value = ingredient.current_amount;
    document.getElementById('amountUnit').textContent = ingredient.unit;
    document.getElementById('lowTrigger').value = ingredient.low;
    document.getElementById('mediumTrigger').value = ingredient.medium;
    document.getElementById('highTrigger').value = ingredient.high;

    updateStockLevel();
    document.getElementById('ingredientModal').classList.add('active');
}

function closeIngredientModal() {
    document.getElementById('ingredientModal').classList.remove('active');
    appState.currentEditingIngredient = null;
    appState.ingredientModalCallback = null;
    appState.isNewIngredient = false;
}

function adjustAmount(change) {
    const amountInput = document.getElementById('currentAmount');
    const currentValue = parseFloat(amountInput.value) || 0;
    const newValue = Math.max(0, currentValue + change);
    amountInput.value = newValue;
    updateStockLevel();
}

function updateStockLevel() {
    if (!appState.currentEditingIngredient) return;

    const ingredient = appState.currentEditingIngredient;
    const currentAmount = parseFloat(document.getElementById('currentAmount').value) || 0;
    const lowVal = parseFloat(document.getElementById('lowTrigger').value) || ingredient.low;
    const mediumVal = parseFloat(document.getElementById('mediumTrigger').value) || ingredient.medium;
    const highVal = parseFloat(document.getElementById('highTrigger').value) || ingredient.high;

    let level = 'low';
    if (currentAmount >= highVal) level = 'high';
    else if (currentAmount >= mediumVal) level = 'medium';

    const percentage = Math.min(100, (currentAmount / highVal) * 100);
    document.getElementById('levelFill').style.width = `${percentage}%`;
}

function saveIngredientUpdate() {
    if (!appState.currentEditingIngredient) return;

    const newAmount = parseFloat(document.getElementById('currentAmount').value) || 0;
    const ingredient = appState.currentEditingIngredient;
    const newName = document.getElementById('ingredientName').value.trim() || ingredient.name;
    const newCategory = document.getElementById('ingredientCategory').value || ingredient.category;
    const lowVal = parseFloat(document.getElementById('lowTrigger').value) || ingredient.low;
    const mediumVal = parseFloat(document.getElementById('mediumTrigger').value) || ingredient.medium;
    const highVal = parseFloat(document.getElementById('highTrigger').value) || ingredient.high;

    ingredient.current_amount = newAmount;
    ingredient.name = newName;
    ingredient.category = newCategory;
    ingredient.low = lowVal;
    ingredient.medium = mediumVal;
    ingredient.high = highVal;

    if (newAmount >= highVal) ingredient.current_level = 'high';
    else if (newAmount >= mediumVal) ingredient.current_level = 'medium';
    else ingredient.current_level = 'low';
    
    if (appState.isNewIngredient) {
        appState.ingredients.push(ingredient);
    }

    closeIngredientModal();
    if (appState.ingredientModalCallback) {
        appState.ingredientModalCallback(ingredient);
    }
    saveState();
    updateDashboard();
    renderInventory();
    renderIngredientOptions();
    renderRecipes();
}

function openRecipeModal(recipeId) {
    const recipe = appState.recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const availability = checkRecipeAvailability(recipe);
    
    document.getElementById('recipeModalTitle').textContent = recipe.name;
    document.getElementById('recipeModalBody').innerHTML = `
        <div class="recipe-meta mb-8">
            <strong>Prep Time:</strong> ${recipe.prep_time} |
            <strong>Cook Time:</strong> ${recipe.cook_time} |
            <strong>Serves:</strong> ${recipe.serves}
        </div>
        ${recipe.source ? `<div class="mb-8"><a href="${recipe.source}" target="_blank">View original</a></div>` : ''}
        <div class="recipe-availability mb-8">
            <div class="availability-score ${availability.level}">
                ${availability.available}/${availability.total} ingredients available (${Math.round(availability.percentage)}%)
            </div>
        </div>
        <h4>Ingredients:</h4>
        <div class="recipe-ingredients-list">
            ${availability.ingredients.map(ing => `
                <div class="recipe-ingredient-item ${ing.status}">
                    <div>
                        <strong>${ing.name}</strong>
                        <div class="text-secondary">${ing.amount} ${ing.unit}</div>
                    </div>
                    <div class="recipe-ingredient-status">
                        ${ing.status === 'available' ? '✓ Available' : 
                          ing.status === 'low' ? '⚠ Low Stock' : '✗ Missing'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Store current recipe for shopping list
    appState.currentRecipe = recipe;
    appState.currentRecipeAvailability = availability;
    
    document.getElementById('recipeModal').classList.add('active');
}

function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('active');
    appState.currentRecipe = null;
    appState.currentRecipeAvailability = null;
}

function addMissingIngredientsToShopping() {
    if (!appState.currentRecipeAvailability) return;
    
    const missingIngredients = appState.currentRecipeAvailability.ingredients
        .filter(ing => ing.status === 'missing' || ing.status === 'low');
    
    missingIngredients.forEach(ing => {
        const existingItem = appState.shoppingList.find(item => item.name === ing.name);
        if (!existingItem) {
            appState.shoppingList.push({
                id: Date.now() + Math.random(),
                name: ing.name,
                amount: ing.amount,
                unit: ing.unit,
                completed: false,
                auto: true
            });
        }
    });
    
    closeRecipeModal();
    renderShoppingList();
    saveState();
}

function initializeRecipeEditing() {
    const createBtn = document.getElementById('createRecipe');
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            openRecipeEditModal({ id: Date.now(), name: '', prep_time: '', cook_time: '', serves: '', ingredients: [], source: '' }, true);
        });
    }
    document.getElementById('recipeEditClose').addEventListener('click', closeRecipeEditModal);
    document.getElementById('recipeEditCancel').addEventListener('click', closeRecipeEditModal);
    document.getElementById('recipeEditSave').addEventListener('click', saveRecipeEdits);
    document.getElementById('addRecipeIngredient').addEventListener('click', () => addRecipeIngredientRow());
    document.getElementById('recipeDeleteBtn').addEventListener('click', deleteCurrentRecipe);
}

function openRecipeEditModal(recipe, isNew=false) {
    appState.currentEditingRecipe = JSON.parse(JSON.stringify(recipe));
    appState.isNewRecipe = isNew;
    document.getElementById('recipeEditTitle').textContent = isNew ? 'Add Recipe' : 'Edit Recipe';
    document.getElementById('editRecipeName').value = recipe.name || '';
    document.getElementById('editRecipeLink').value = recipe.source || '';
    document.getElementById('editRecipePrep').value = recipe.prep_time || '';
    document.getElementById('editRecipeCook').value = recipe.cook_time || '';
    document.getElementById('editRecipeServes').value = recipe.serves || '';
    renderRecipeEditIngredients(recipe.ingredients || []);
    document.getElementById('recipeDeleteBtn').style.display = isNew ? 'none' : 'inline-block';
    document.getElementById('recipeEditModal').classList.add('active');
}

function closeRecipeEditModal() {
    document.getElementById('recipeEditModal').classList.remove('active');
    appState.currentEditingRecipe = null;
    appState.isNewRecipe = false;
}

function renderRecipeEditIngredients(ings) {
    const container = document.getElementById('recipeEditIngredients');
    container.innerHTML = '';
    ings.forEach(ing => addRecipeIngredientRow(ing.name, ing.amount, ing.unit));
}

function addRecipeIngredientRow(name='', amount='', unit='') {
    const container = document.getElementById('recipeEditIngredients');
    const row = document.createElement('div');
    row.className = 'recipe-edit-row';
    row.innerHTML = `<input type="text" list="ingredientOptions" class="recipe-ing-name" value="${name}">`
        + `<input type="number" step="0.1" class="recipe-ing-amount" value="${amount}">`
        + `<input type="text" class="recipe-ing-unit" value="${unit}">`
        + `<button>&times;</button>`;
    row.querySelector('button').addEventListener('click', () => row.remove());
    container.appendChild(row);
}

async function ensureIngredientExists(name, unit) {
    if (findIngredientByName(name)) return;
    return new Promise(resolve => {
        openIngredientModal({ name, unit, category: 'Pantry', low: 1, medium: 2, high: 4, current_level: 'low', current_amount: 0 }, true, () => resolve());
    });
}

async function saveRecipeEdits() {
    if (!appState.currentEditingRecipe) return;
    const recipe = appState.currentEditingRecipe;
    recipe.name = document.getElementById('editRecipeName').value.trim() || 'Untitled';
    recipe.source = document.getElementById('editRecipeLink').value.trim();
    recipe.prep_time = document.getElementById('editRecipePrep').value.trim();
    recipe.cook_time = document.getElementById('editRecipeCook').value.trim();
    recipe.serves = document.getElementById('editRecipeServes').value.trim();

    const rows = document.querySelectorAll('#recipeEditIngredients .recipe-edit-row');
    recipe.ingredients = [];
    for (const row of rows) {
        const name = row.querySelector('.recipe-ing-name').value.trim();
        const amount = parseFloat(row.querySelector('.recipe-ing-amount').value) || 0;
        const unit = row.querySelector('.recipe-ing-unit').value.trim();
        if (!name) continue;
        await ensureIngredientExists(name, unit);
        recipe.ingredients.push({ name, amount, unit });
    }

    if (appState.isNewRecipe) {
        recipe.id = Date.now();
        appState.recipes.push(recipe);
    } else {
        const idx = appState.recipes.findIndex(r => r.id === recipe.id);
        if (idx >= 0) appState.recipes[idx] = recipe;
    }

    closeRecipeEditModal();
    saveState();
    renderRecipes();
    renderInventory();
}

function editRecipe(id) {
    const recipe = appState.recipes.find(r => r.id === id);
    if (recipe) openRecipeEditModal(recipe);
}

function deleteRecipe(id) {
    appState.recipes = appState.recipes.filter(r => r.id !== id);
    saveState();
    renderRecipes();
}

function deleteCurrentRecipe() {
    if (!appState.currentEditingRecipe) return;
    deleteRecipe(appState.currentEditingRecipe.id);
    closeRecipeEditModal();
}

// Shopping List Functions
function initializeShoppingList() {
    const generateBtn = document.getElementById('generateShoppingList');
    const clearBtn = document.getElementById('clearCompleted');
    const addBtn = document.getElementById('addManualItem');
    const manualInput = document.getElementById('manualItem');

    generateBtn.addEventListener('click', generateShoppingListFromLowStock);
    clearBtn.addEventListener('click', clearCompletedItems);
    addBtn.addEventListener('click', addManualItem);
    
    manualInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addManualItem();
    });
}

function generateShoppingListFromLowStock() {
    const lowStockItems = appState.ingredients.filter(item => item.current_level === 'low');
    
    lowStockItems.forEach(item => {
        const existingItem = appState.shoppingList.find(shopping => shopping.name === item.name);
        if (!existingItem) {
            appState.shoppingList.push({
                id: Date.now() + Math.random(),
                name: item.name,
                amount: item.medium - item.current_amount,
                unit: item.unit,
                qty: item.medium - item.current_amount,
                selectedUnit: item.unit,
                completed: false,
                auto: true
            });
        }
    });

    renderShoppingList();
    saveState();
}

function addManualItem() {
    const input = document.getElementById('manualItem');
    const itemName = input.value.trim();
    
    if (!itemName) return;
    
    appState.shoppingList.push({
        id: Date.now(),
        name: itemName,
        qty: 1,
        selectedUnit: '',
        completed: false,
        auto: false
    });

    input.value = '';
    renderShoppingList();
    saveState();
}

async function renderShoppingList() {
    const shoppingContainer = document.getElementById('shoppingList');
    
    if (appState.shoppingList.length === 0) {
        shoppingContainer.innerHTML = '<p class="text-secondary">Your shopping list is empty. Add items manually or generate from low stock items.</p>';
        return;
    }
    
    let html = '';
    const allUnits = [...new Set(appState.ingredients.map(i => i.unit).filter(Boolean))];
    let changed = false;
    for (const item of appState.shoppingList) {
        const ingredient = findIngredientByName(item.name);
        if (item.qty == null) {
            item.qty = item.amount ?? 1;
            changed = true;
        }
        if (!item.selectedUnit) {
            item.selectedUnit = item.unit || ingredient?.unit || allUnits[0] || '';
            changed = true;
        }
        const defaultUnit = item.selectedUnit;
        const qty = item.qty;
        const inStock = ingredient ? `${ingredient.current_amount} ${ingredient.unit}` : '0';
        html += `
        <div class="shopping-item shopping-list-item ${item.completed ? 'completed' : ''}">
            <input type="checkbox" class="shopping-checkbox" data-item="${item.name}"
                   ${item.completed ? 'checked' : ''}
                   onchange="toggleShoppingItem(${item.id})">
            <div class="shopping-item-text">
                <strong>${item.name}</strong>
                <span class="text-secondary">(stock: ${inStock})</span>
                ${item.amount ? `<div class="text-secondary">${item.amount} ${item.unit || ''}</div>` : ''}
            </div>
            <button class="shopping-item-remove" onclick="removeShoppingItem(${item.id})">✗</button>
            <select data-id="${item.id}">
                ${allUnits.map(u => `<option value="${u}" ${u === defaultUnit ? 'selected' : ''}>${u}</option>`).join('')}
            </select>
            <input type="number" min="0" step="0.1" value="${qty}" data-qty="${item.id}">
        </div>`;
    }
    shoppingContainer.innerHTML = html;
    if (changed) saveState();

    shoppingContainer.querySelectorAll('select[data-id]').forEach(sel => {
        sel.addEventListener('change', e => {
            const id = parseFloat(sel.dataset.id);
            const item = appState.shoppingList.find(i => i.id === id);
            if (item) {
                item.selectedUnit = sel.value;
                saveState();
            }
        });
    });

    shoppingContainer.querySelectorAll('input[data-qty]').forEach(inp => {
        inp.addEventListener('input', e => {
            const id = parseFloat(inp.dataset.qty);
            const item = appState.shoppingList.find(i => i.id === id);
            if (item) {
                item.qty = parseFloat(inp.value) || 0;
                saveState();
            }
        });
    });
}

function toggleShoppingItem(id) {
    const item = appState.shoppingList.find(item => item.id === id);
    if (item) {
        item.completed = !item.completed;
        if (item.completed) {
            const qty = parseFloat(item.qty) || 0;
            const unit = item.selectedUnit || item.unit;
            if (qty > 0) {
                addToInventory(item.name, qty, unit);
            }
        }
        renderShoppingList();
        renderInventory();
        saveState();
    }
}

function removeShoppingItem(id) {
    appState.shoppingList = appState.shoppingList.filter(item => item.id !== id);
    renderShoppingList();
    saveState();
}

function clearCompletedItems() {
    appState.shoppingList = appState.shoppingList.filter(item => !item.completed);
    renderShoppingList();
    saveState();
}

function addToInventory(name, qty, unit) {
    const ingredient = findIngredientByName(name);
    if (ingredient) {
        ingredient.current_amount = (ingredient.current_amount || 0) + qty;
        if (ingredient.current_amount >= ingredient.high) ingredient.current_level = 'high';
        else if (ingredient.current_amount >= ingredient.medium) ingredient.current_level = 'medium';
        else ingredient.current_level = 'low';
    } else {
        appState.ingredients.push({
            name,
            category: 'Pantry',
            unit,
            low: 1,
            medium: 2,
            high: 4,
            current_level: 'high',
            current_amount: qty
        });
    }
}

function addSelectedRecipesToShopping() {
    const checks = document.querySelectorAll('.recipe-check:checked');
    const needed = {};
    checks.forEach(chk => {
        const id = parseFloat(chk.dataset.id);
        const qtyInput = document.querySelector(`.recipe-qty[data-id="${id}"]`);
        const count = parseInt(qtyInput?.value) || 1;
        const recipe = appState.recipes.find(r => r.id === id);
        if (!recipe) return;
        recipe.ingredients.forEach(ing => {
            const amt = (ing.amount || 1) * count;
            if (!needed[ing.name]) needed[ing.name] = { amount: 0, unit: ing.unit };
            needed[ing.name].amount += amt;
        });
    });

    Object.entries(needed).forEach(([name, info]) => {
        const ingredient = findIngredientByName(name);
        const have = ingredient?.current_amount || 0;
        const missing = info.amount - have;
        if (missing > 0) {
            let existing = appState.shoppingList.find(i => i.name === name);
            if (existing) {
                existing.amount = (existing.amount || 0) + missing;
                existing.qty = existing.amount;
                existing.unit = existing.unit || info.unit;
                existing.selectedUnit = existing.selectedUnit || info.unit;
            } else {
                appState.shoppingList.push({
                    id: Date.now() + Math.random(),
                    name,
                    amount: missing,
                    unit: info.unit,
                    qty: missing,
                    selectedUnit: info.unit,
                    completed: false,
                    auto: true
                });
            }
        }
    });

    renderShoppingList();
    saveState();
}


// Recipe Import Functions
function initializeRecipeImport() {
    const importBtn = document.getElementById('importRecipe');
    const urlInput = document.getElementById('recipeUrl');
    if (!importBtn || !urlInput) return;

    importBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (!url) return;
        importRecipeFromUrl(url);
        urlInput.value = '';
    });
}

function initializeRecipeSelection() {
    const addBtn = document.getElementById('recipesToShopping');
    if (addBtn) {
        addBtn.addEventListener('click', addSelectedRecipesToShopping);
    }
}

async function importRecipeFromUrl(url) {
    try {
        const html = await fetchRecipeHtml(url);
        const doc = new DOMParser().parseFromString(html, 'text/html');

        let recipeData = extractRecipeData(doc);
        if (!recipeData || !recipeData.recipeIngredient) {
            alert('Unable to parse recipe data from the provided URL.');
            return;
        }

        const ingredients = recipeData.recipeIngredient.map(parseIngredientLine);

        const recipe = {
            id: Date.now(),
            name: recipeData.name || 'Imported Recipe',
            prep_time: recipeData.prepTime || '',
            cook_time: recipeData.cookTime || '',
            serves: recipeData.recipeYield || '',
            ingredients,
            source: url
        };
        openRecipeEditModal(recipe, true);
    } catch (err) {
        console.warn(err);
        alert('Failed to import recipe.');
    }
}

async function fetchRecipeHtml(url) {
    const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://r.jina.ai/${url}`
    ];
    for (const proxy of proxies) {
        try {
            const res = await fetch(proxy);
            if (res.ok) return await res.text();
        } catch (_) {}
    }
    const res = await fetch(url);
    if (res.ok) return await res.text();
    throw new Error('Network response was not ok');
}

function extractRecipeData(doc) {
    // attempt JSON-LD first
    const scripts = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));
    for (const script of scripts) {
        try {
            const data = JSON.parse(script.textContent);
            const recipe = findRecipeObject(data);
            if (recipe) return recipe;
        } catch (_) {
            continue;
        }
    }
    // fallback to microdata
    const recipeEl = doc.querySelector('[itemtype*="Recipe" i]');
    if (recipeEl) {
        const getProp = prop => recipeEl.querySelector(`[itemprop="${prop}"]`)?.textContent.trim() || '';
        const ingredients = Array.from(recipeEl.querySelectorAll('[itemprop="recipeIngredient"]')).map(el => el.textContent.trim());
        return {
            name: getProp('name'),
            prepTime: getProp('prepTime'),
            cookTime: getProp('cookTime'),
            recipeYield: getProp('recipeYield'),
            recipeIngredient: ingredients
        };
    }
    return null;
}

function findRecipeObject(data) {
    if (!data) return null;
    if (Array.isArray(data)) {
        for (const item of data) {
            const found = findRecipeObject(item);
            if (found) return found;
        }
        return null;
    }
    if (typeof data === 'object') {
        if (data['@type'] === 'Recipe') return data;
        if (data['@graph']) return findRecipeObject(data['@graph']);
        for (const key of Object.keys(data)) {
            const found = findRecipeObject(data[key]);
            if (found) return found;
        }
    }
    return null;
}

function parseIngredientLine(line) {
    // remove notes in parentheses and anything after a comma
    let cleaned = line.replace(/\([^)]*\)/g, '').split(',')[0];
    cleaned = cleaned.replace(/\s+-\s+|\s+–\s+/g, ' ');
    const tokens = cleaned.trim().split(/\s+/);
    const fractionMap = { '½':0.5, '¼':0.25, '¾':0.75, '⅓':1/3, '⅔':2/3, '⅛':0.125, '⅜':0.375, '⅝':0.625, '⅞':0.875 };
    const units = ['g','gram','grams','kg','kilogram','kilograms','ml','l','litre','litres','tsp','teaspoon','teaspoons','tbsp','tablespoon','tablespoons','cup','cups','oz','ounce','ounces','lb','lbs','pound','pounds','pint','pints','quart','quarts','clove','cloves','can','cans'];

    function parseNumber(tok) {
        if (fractionMap[tok]) return fractionMap[tok];
        if (/^\d+\/\d+$/.test(tok)) { const [n,d]=tok.split('/').map(Number); return n/d; }
        if (/^\d+(?:\.\d+)?-\d+(?:\.\d+)?$/.test(tok)) {
            const [a,b] = tok.split('-').map(parseFloat);
            return (a+b)/2; // use average for ranges
        }
        if (/^\d+\.\d+$/.test(tok)) return parseFloat(tok);
        if (/^\d+$/.test(tok)) return parseInt(tok,10);
        const m = tok.match(/^(\d+)([½¼¾⅓⅔⅛⅜⅝⅞])$/);
        if (m) return parseInt(m[1],10) + fractionMap[m[2]];
        return null;
    }

    let amount = 0; let unit = ''; let i = 0;
    while (i < tokens.length) {
        if (tokens[i].toLowerCase() === 'x') { i++; continue; }
        const cleanedToken = tokens[i].replace(/^[-+]/, '').replace(/[-+]$/, '');
        const val = parseNumber(cleanedToken);
        if (val == null) break;
        amount += val;
        i++;
    }
    if (i < tokens.length && units.includes(tokens[i].toLowerCase())) {
        unit = tokens[i].toLowerCase();
        i++;
    }
    const name = tokens.slice(i).join(' ').trim();
    if (!amount) amount = 1;
    const converted = convertUStoUK(amount, unit);
    return { name, amount: converted.amount, unit: converted.unit };
}

function convertUStoUK(amount, unit) {
    const map = {
        cup: { unit: 'ml', factor: 240 },
        cups: { unit: 'ml', factor: 240 },
        oz: { unit: 'g', factor: 28.35 },
        ounce: { unit: 'g', factor: 28.35 },
        ounces: { unit: 'g', factor: 28.35 },
        lb: { unit: 'g', factor: 453.6 },
        lbs: { unit: 'g', factor: 453.6 },
        pound: { unit: 'g', factor: 453.6 },
        pounds: { unit: 'g', factor: 453.6 },
        pint: { unit: 'ml', factor: 568 },
        pints: { unit: 'ml', factor: 568 },
        quart: { unit: 'ml', factor: 946 },
        quarts: { unit: 'ml', factor: 946 }
    };
    const conv = map[unit];
    if (conv) {
        return { amount: Math.round(amount * conv.factor), unit: conv.unit };
    }
    return { amount, unit };
}

// Settings Functions
function initializeSettings() {
    const lowThreshold = document.getElementById('lowThreshold');
    const mediumThreshold = document.getElementById('mediumThreshold');
    const addIngredientBtn = document.getElementById('addNewIngredient');
    
    lowThreshold.addEventListener('input', (e) => {
        document.getElementById('lowThresholdValue').textContent = `${e.target.value}%`;
    });
    
    mediumThreshold.addEventListener('input', (e) => {
        document.getElementById('mediumThresholdValue').textContent = `${e.target.value}%`;
    });
    
    addIngredientBtn.addEventListener('click', addNewIngredient);
}

function addNewIngredient() {
    const name = document.getElementById('newIngredientName').value.trim();
    const category = document.getElementById('newIngredientCategory').value;
    const unit = document.getElementById('newIngredientUnit').value.trim();
    
    if (!name || !unit) {
        alert('Please fill in all fields');
        return;
    }
    
    const newIngredient = {
        name,
        category,
        unit,
        low: 1,
        medium: 2,
        high: 4,
        current_level: 'medium',
        current_amount: 2
    };
    
    appState.ingredients.push(newIngredient);
    saveState();

    // Clear form
    document.getElementById('newIngredientName').value = '';
    document.getElementById('newIngredientUnit').value = '';
    
    // Update displays
    updateDashboard();
    renderInventory();
    
    alert('Ingredient added successfully!');
}

// Make functions globally available
window.showPage = showPage;
window.openIngredientModal = openIngredientModal;
window.openRecipeModal = openRecipeModal;
window.editRecipe = editRecipe;
window.deleteRecipe = deleteRecipe;
window.toggleShoppingItem = toggleShoppingItem;
window.removeShoppingItem = removeShoppingItem;
