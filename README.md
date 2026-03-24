# Rick & Morty Character Explorer

## Contributors
[William Gitau]
---

## Explore the Multiverse of Characters

Rick & Morty Character Explorer is a React-based web application that demonstrates advanced routing concepts while providing an interactive way to browse characters from the popular animated series. Navigate through the multiverse, discover character details, and explore episode appearances in a clean, responsive interface.

---

## Problem Statement

Learning React routing concepts can be challenging due to:
- Complex implementation of nested routes
- Difficulty understanding dynamic routing with API data
- Lack of practical, engaging examples that combine routing with real-world data
- Overwhelming documentation without hands-on application

---

## Solution Overview

This application provides a practical demonstration of React Router concepts through an engaging character explorer:

| Phase | Description |
|-------|-------------|
| **Browse** | View all characters in a responsive grid with search and pagination |
| **Explore** | Click on any character to view detailed information |
| **Analyze** | Navigate through nested tabs to view character info and episode lists |

---

## Design System

**Primary Colors:**
- Blue (Primary Actions, Active States)
- Gray (Neutral Backgrounds, Text)
- Green/Red (Status Indicators - Alive/Dead)

**Typography:**
- Headers: System Sans / Inter
- Body: System UI Font Stack

**Layout:** Utility-first, card-based responsive grid built with Tailwind CSS v4.

---

## Key Features

- **Basic Routing** - Seamless navigation between Home, Characters, and About pages
- **Nested Routing** - Dashboard layout with sidebar navigation and nested routes
- **Dynamic Routing** - Character detail pages with ID-based URLs
- **Nested Dynamic Routing** - Info and Episodes tabs with their own routes
- **API Integration** - Real-time data fetching from Rick & Morty API
- **Search Functionality** - Filter characters by name with debounced search
- **Pagination** - Browse through pages of characters
- **Error Handling** - Graceful error messages for failed API requests
- **404 Page** - Custom not found page for invalid routes
- **Responsive Design** - Optimized for desktop and mobile viewing

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library & State Management |
| **React Router DOM** | Client-side routing and navigation |
| **Tailwind CSS v4** | Modern utility-first styling |
| **Vite** | Fast build tool and development server |
| **Fetch API** | Data fetching from external API |

---

## Installation & Setup

To deploy this project locally, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone [https://github.com/gitauwilly1/rick-morty-explorer.git]
    cd rick-morty-explorer
    ```
2. **Install Dependencies:**
    ```bash
    npm install
    ```
3. **Execution:** Run the development server:
    ```bash
    npm run dev
    ```

---
## Known Bugs
There are no known bugs.

---

## License
* **License:** MIT License.

---

## Support and Information
**Email:** [gitauwilly254@gmail.com]