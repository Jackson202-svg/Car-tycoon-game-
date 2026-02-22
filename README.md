# 🏎️ Palmy Car Tycoon
**Live Demo:** [Click Here to Play](https://yourusername.github.io/your-repo-name/)

---
Welcome to the official repository for **Palmy Car Tycoon**. This is a web-based tycoon game built with HTML, CSS, and JavaScript, designed to scale with a Firebase backend.

## 📁 Folder Structure

* `index.html` — The main garage and dashboard.
* `style.css` — Global styling for the entire game.
* `script.js` — Core game logic (Income, saving, and UI updates).
* `src/data.js` — The "Database" of car prices and bot stats.
* `bot/bot.html` — The AI hiring center for passive income.
* `admin/admin.html` — Developer tools for testing.
* `sell.html` & `carpart.html` — Marketplace and upgrade shop.

## 🚀 How to Run

1.  **Clone the Repo:** `git clone https://github.com/YourUsername/Palmy-Car-Tycoon.git`
2.  **Open:** Simply double-click `index.html` in your browser.
3.  **Note:** This project uses relative pathing, so ensure the folder structure remains intact for CSS and JS to load correctly.

## ☁️ Backend Integration (Roadmap)

We are currently transitioning from `localStorage` to **Google Firebase**.
* **Authentication:** Allow users to save progress across devices.
* **Firestore:** Real-time database to store cash, car inventory, and bot levels.
* **Hosting:** Deploying via GitHub Actions or Firebase Hosting.

## 🛡️ Admin & Security
The `/admin` directory contains tools for economy balancing. 
**Warning:** Ensure this directory is protected or removed before a public production release to prevent cheating.

