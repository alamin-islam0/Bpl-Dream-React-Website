# Site Functionality

This web app lets users build a fantasy team by selecting up to 6 players within a virtual coin balance.

## Core Features

- Player listing: Loads players from `public/players.json` and displays them as responsive cards.
- Balance tracking: Shows available coins in the header and updates after purchases.
- Select players: Add a player if you have enough coins and haven't selected them already.
- Limits and validation: Prevents duplicate selections and caps total selected players at 6.
- Selected list: View selected players and remove any to refund coins to the balance.
- Responsive UI: Mobile-first layout with Tailwind/DaisyUI utilities for grids, cards, and navigation.

## Key UI Sections

- Header: Displays logo, simple nav, and current coin balance.
- Available Players: Grid of player cards with role, country, rating, styles, and price.
- Selected Players: List of chosen players with quick remove action.

## Tech Stack

- React + Vite
- Tailwind CSS + DaisyUI
- React Toastify for notifications

## How It Works

- Data Fetching: `src/App.jsx` fetches `players.json` and provides it to components.
- Selection Flow: `PlayerCard` validates selection, adjusts balance, and updates the selected list.
- Remove Flow: `SelectedPlayerCard` removes a player and refunds the coin cost.

## Run Locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open the URL shown in the terminal
