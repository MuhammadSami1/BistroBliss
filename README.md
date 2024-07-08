# Project Documentation

## 1. Tools Used

- **React**: A JavaScript library for building user interfaces, particularly single-page applications where data dynamically changes over time.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs without writing any CSS.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **React Router DOM**: A collection of navigational components that compose declaratively with your application.

## 2. Challenges Faced

### Challenge: Implementing Menu Page Functionality

**Description**: One of the most challenging aspects of the project was implementing the functionality on the menu page. The requirement was to display items based on the selected category (Breakfast, Drinks, Desserts, Main Dishes). Additionally, there was a need to shuffle items when the page loads or when the "All" button is clicked, showing only 16 out of the total 32 items.

**Solution**:

- **Filtering Items**: I used the `filter` function to filter items based on the selected category. This was straightforward for Breakfast, Drinks, Desserts, and Main Dishes.
- **Shuffling Items**: To implement the shuffling functionality, I used `Math.random` to shuffle the array of items each time the "All" button is clicked or when the page loads. This ensures that the displayed items are different every time.
- **Limiting Items**: I used array slicing to limit the displayed items to 16. After shuffling the array, I sliced the first 16 items to be displayed.
