# Ingredient-Tracker

Track household ingredients and get recipe suggestions based on what you have.
The app stores all data in the browser using **localStorage** so each visitor keeps their own inventory, shopping list and imported recipes.

### Features

- Maintain a list of ingredients with current amounts
- Generate a shopping list from low stock items
- Import recipes from URLs (supports "application/ld+json" markup)
  - Ingredient quantities in US units are automatically converted to UK units
  - Use the **Import Recipe** form on the Recipes page to paste a URL
- Data persists between visits on the same browser

### Development

This project is a simple static site with no build step. Open `index.html` in your browser to run locally or host the files via GitHub Pages.
