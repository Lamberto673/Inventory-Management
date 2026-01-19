# Inventory Management App

A simple inventory management web app built to keep track of products, stock levels, and basic insights in one place. This project focuses on clean UI, clear data flow, and practical features you’d expect from a small internal inventory tool.

---

## Overview

The app is structured around a few core pages:

* **Dashboard** – quick overview and insights
* **Inventory** – list, search, and manage products
* **Add Product** – add new items into the system
* **Settings** – basic account and profile management

The goal is not to overcomplicate things, but to make inventory data easy to read, update, and navigate.

## ScreenShots

### Landing Page
<img width="1901" height="916" alt="image" src="https://github.com/user-attachments/assets/3799d1e0-2bf2-4f71-8dfd-df11baab91e0" />

### DashBoard
<img width="1915" height="894" alt="image" src="https://github.com/user-attachments/assets/a6acbbaf-002e-4df9-87a4-9d355783ab43" />

### Inventory
<img width="1904" height="756" alt="image" src="https://github.com/user-attachments/assets/bbada0cd-bd0f-4dab-99c9-68f38a761c88" />

### Add Product
<img width="1652" height="716" alt="image" src="https://github.com/user-attachments/assets/092fd5d2-82d0-47aa-8aa4-9c0e03ae058e" />

### Settings
<img width="1505" height="596" alt="image" src="https://github.com/user-attachments/assets/9c7c688a-710c-42c0-9a9e-86b5c696e5f7" />

---

## Pages & Features

### Dashboard

The dashboard gives a high-level snapshot of the inventory:

* **Key metrics**

  * Total number of products
  * Total inventory value
  * Number of low-stock items
* **Weekly activity chart**

  * Visualizes how many products are added per week
* **Stock levels**

  * Quick list showing which items are low or healthy in stock
* **Efficiency chart**

  * Shows the ratio between in-stock and low-stock items

This page is meant to answer: *“How is my inventory doing right now?”* at a glance.

---

### Inventory

The inventory page is where most day-to-day work happens.

* Product table with:

  * Name
  * SKU
  * Price
  * Quantity
  * Low stock threshold
* **Search**

  * Filter products by name using query parameters
* **Pagination**

  * Navigate through large product lists without loading everything at once
* **Actions**

  * Delete products directly from the list

The URL-driven search and pagination make the page refresh-safe and shareable.

---

### Add Product

A dedicated form for adding new products:

* Required fields:

  * Product name
  * Price
  * Quantity
* Optional fields:

  * SKU
  * Low stock threshold
* Basic validation to prevent invalid entries

This page keeps product creation straightforward and separate from the main inventory list.

---

### Settings

Account-related configuration and preferences:

* Profile information (display name)
* Profile image
* Placeholder sections for:

  * Authentication
  * Notifications
  * Active sessions
  * Additional settings

The settings page is structured to be expandable as more user-related features are added.

---

## Tech Notes

* Built with **Next.js (App Router)**
* Server-side rendering for data-heavy pages
* URL-based state for search and pagination
* Modular components for reuse (tables, pagination, sidebar)

---

## Purpose

This project was built as a practical learning and portfolio project:

* to understand real-world data flow
* to practice server components and query handling
* to design a clean, usable dashboard-style UI

It’s intentionally simple, but structured in a way that can scale with more features later on.


---

If you’re reading this repo, feel free to explore the code and adapt it for your own use cases.
