### Site Functionality

- **Header and balance**: Displays site navigation and the current coin balance with an icon.
- **View toggle**: Switch between "Available" players and "Selected" players; shows selected count.
- **Player data**: Loads players from `public/players.json` and renders a responsive grid.
- **Player cards**: Show image, name, country, role, rating, batting/bowling styles, and price.
- **Select players**: Choose up to 6 unique players.
  - Deducts the player's price from available coins when selected.
  - Prevents duplicates and enforces the 6-player cap.
  - Shows toast messages for duplicates, cap reached, or insufficient coins.
- **Selected list**: Displays chosen players with an option to remove.
  - Removing a player refunds their price back to the coin balance.
- **Initial balance**: Starts with 200,000,000 coins.

Notes
- State is in-memory; selections reset on page refresh.
