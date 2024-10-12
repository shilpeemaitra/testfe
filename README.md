# Front-End Technical Test

Welcome to CodeWalnut's front-end technical test using React and the [PokeAPI](https://pokeapi.co/)! The PokeAPI provides an extensive REST and GraphQL API for fetching Pokémon data. In this test, you will build a Pokémon app that utilizes the PokeAPI, and you can choose from different levels of difficulty depending on your experience.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/CW-Codewalnut/codewalnut-front-end-tech-test.git
```

### 2. Install Dependencies

We are using `pnpm` for package management. If you haven't installed `pnpm` yet, you can install it globally by running:

```bash
npm install -g pnpm
```

Once you have `pnpm` installed, run:

```bash
pnpm install
```

### 3. Available Styling Options

The project is set up with **Tailwind CSS** as the default styling solution. However, you can opt to use any of the following:

- **Tailwind (default)**: Already configured in `src/app/globals.css`.
- **CSS**: You can create and use custom CSS styles by modifying or adding to `src/app/globals.css`.
- **Sass**: A basic Sass configuration is already in place. Add your styles to `src/styles/globals.scss`.

You are free to use any styling approach you prefer, these are just the options set up for you already in this project.

### 4. Running the App

To start the development server, run:

```bash
pnpm dev
```

This will launch the app in development mode at [http://localhost:3000](http://localhost:3000).

## Challenge Tiers

### Junior Level

#### Task:

Build a simple **Pokémon search app** that allows users to search for Pokémon by name or ID and display their details.

#### Requirements:

- Use the PokeAPI to fetch Pokémon data.
- Implement a search bar to search by Pokémon name or ID.
- Display the Pokémon’s name, image, and type(s) when a search is performed.
- Ensure the app is **mobile responsive**.

#### Bonus Points:

- Add error handling for invalid searches.
- Display a loading indicator while fetching data.

---

### Mid Level

#### Task:

Create a **Pokémon explorer app** that allows users to browse and view detailed information on Pokémon with pagination.

#### Requirements:

- Fetch and display a list of Pokémon with pagination (using `limit` and `offset` query parameters).
- Implement client-side routing to display individual Pokémon details on a separate page or modal.
- Include Pokémon name, image, type(s), abilities, and stats (HP, Attack, etc.).
- Ensure the app is **fully responsive**.

##My notes:

I used the directive "use client" to enable client-side rendering, which allows the page to handle dynamic elements like user input and API calls directly in the browser.

Component-Based Structure
I organized the code into components for better clarity and maintenance.
For example, the Home component acts as the main layout, while a separate PokemonList component manages the search bar, API calls to the PokeAPI, and displays Pokémon details.
This separation of concerns makes the application easier to understand and update.

Responsive Layout with Tailwind CSS
I applied Tailwind CSS classes in the JSX for styling, ensuring the app is responsive and adapts to different screen sizes.
I used utility classes like flex, min-h-screen, and p-24 to manage layout and spacing, giving the app a polished and consistent look on both mobile and desktop devices.

Direct User Feedback through Search
The PokemonList component includes a search bar that allows users to input queries, fetching and displaying Pokémon data from the PokeAPI in real-time.
This feature creates an interactive experience, making the app dynamic and engaging.

Summary
In summary, I combined client-side rendering, a component-based structure, and Tailwind CSS to create a responsive and interactive Pokémon search app. This approach ensures modular code, enhances user experience with real-time search, and prioritizes mobile responsiveness for greater accessibility.
justify-between: Spaces out items with space between them.
p-24: Adds padding around the element (likely 24 pixels based on Tailwind’s spacing scale).
