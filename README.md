This app have 3 card, when you click on card then card details show if you click again then hide.
---

## ✨ Features  
✅ Click to toggle size and color selection  
✅ Previous dropdown closes when another box is clicked  
✅ Responsive and clean UI  

---

## 🚀 How It Works  

### 1️⃣ HTML Structure  
- Each offer is wrapped inside an `.item` div.  
- Inside each `.item`, there’s a `.top-item` (clickable area) and a `.dropdown-container` (which is hidden by default).  

### 2️⃣ CSS Styling (`style.css`)  
- The dropdowns (`.dropdown-container`) are initially hidden using `display: none;`.  
- When clicked, the dropdown is displayed using `display: block;`.  

### 3️⃣ JavaScript Magic (`script.js`)  
- Listens for clicks on `.top-item`.  
- If another dropdown is open, it hides it first.  
- Then, it toggles the dropdown for the clicked item.  

---

## 🛠️ How to Run  
1. Download the files:  
   - `index.html`  
   - `style.css`  
   - `script.js`  
2. Open `index.html` in a browser.  
3. Click on any offer box to see the dropdown in action.  

Enjoy coding! 🚀🔥
