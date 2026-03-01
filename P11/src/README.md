# 🔍 React User Search Table

A simple React application that filters and displays user data in a table format based on search input.

---

## 🚀 Features

- Search users by **first name**
- Real-time filtering
- Clean table UI
- React functional components
- useState hook
- Filter and map array methods

---

## 🛠️ Built With

- React
- JavaScript (ES6)
- Array.filter()
- Array.map()
- useState Hook

---

## 📁 Project Structure

# 🔍 React User Search Table

A simple React application that filters and displays user data in a table format based on search input.

---

## 🚀 Features

- Search users by **first name**
- Real-time filtering
- Clean table UI
- React functional components
- useState hook
- Filter and map array methods

---

## 🛠️ Built With

- React
- JavaScript (ES6)
- Array.filter()
- Array.map()
- useState Hook

---

## 📁 Project Structure
src/
│
├── Compartment/
│ ├── SearchBar.jsx
│ ├── UserList.jsx
│ └── Data.js
│
└── App.jsx


---

## 🧠 How It Works

1. User types in the search input.
2. `SearchBar` sends the value to `App` using props.
3. `App` stores the value in state.
4. `Data` is filtered using `.filter()`.
5. Filtered results are displayed using `.map()` inside a table.

---

## 🧩 Core Logic

```js
const filteredData = Data.filter((item) =>
  item.first_name
    .toLowerCase()
    .includes(searchBar.toLowerCase())
);


---

## 🧠 How It Works

1. User types in the search input.
2. `SearchBar` sends the value to `App` using props.
3. `App` stores the value in state.
4. `Data` is filtered using `.filter()`.
5. Filtered results are displayed using `.map()` inside a table.

---

## 🧩 Core Logic
---

## Sample Data Formate
```js
const filteredData = Data.filter((item) =>
  item.first_name
    .toLowerCase()
    .includes(searchBar.toLowerCase())
);




---