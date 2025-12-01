## MyStore – Angular E‑commerce SPA

**MyStore** is a single‑page e‑commerce application (SPA) built with **Angular**.  
It provides a user experience similar to real‑world online stores:

- **Product list**: Displays all products with image, name, price, and short description, with the ability to select quantity and add items to the cart.
- **Product details page**: Shows extended product information with an option to add the item to the cart.
- **Shopping cart**: Displays cart contents, lets the user update quantities, remove items, and view the total price.
- **Checkout form**: A template‑driven form that collects user data (name, address, and card number).
- **Order confirmation page**: Shows a success message for the user along with the total amount paid.

Product data is fetched from `assets/data.json` via the `ProductService`, and cart state is shared between components using `CartService` and a `BehaviorSubject`.

---

### Requirements

- Node.js and npm
- Angular CLI (installed globally) – optional, for running with the `ng` command

---

### How to run it on your machine

1. Open a terminal (PowerShell or any terminal) inside the project folder:

   ```bash
   cd mystore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the browser at:

   ```text
   http://localhost:4200/
   ```

You will see the **Product List** page and you can navigate between:

- **Products** (home page).
- **Cart** from the top navigation bar.

---

### Using the application

- From the **Products** page:
  - Choose a quantity then click **Add to Cart**.
  - Click **Product Details** to go to the details page for a specific product.
- From the **Cart** page:
  - Change the quantity from the number input; the total updates immediately.
  - Remove a product from the cart with the **Delete** button.
  - Click **Checkout** to go to the checkout form.
- From the **Checkout** page:
  - Enter your **full name**, **address**, and a fake **card number**.
  - When you click **Confirm Order** with valid input:
    - The cart will be cleared.
    - You will be redirected to the **Order Confirmation** page with your name and the total amount.

---

### Available npm scripts

- `npm start`: Run the development server (`ng serve`).
- `npm run build`: Build a production‑ready bundle into the `dist/` folder.
- `npm test`: Run unit tests (if any).
