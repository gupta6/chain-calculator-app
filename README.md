# Chain Calculator App

This web application allows users to execute a chain of 5 mathematical functions, where the output (y) of each function serves as the input (x) for the next. Users can modify mathematical equations within each function, and the app will automatically calculate the result based on the sequence of functions applied. The UI consists of 5 cards representing the 5 functions, visually connected by lines to represent the flow of data from one function to the next.

## Features
- Fixed Function Order: The functions execute in the following fixed order: Function 1 → Function 2 → Function 4 → Function 5 → Function 3
- Equation Input: Each function card contains a text input where users can modify the equation. Only basic arithmetic operators (addition, subtraction, multiplication, division, and exponents) are allowed.
- Real-time Calculation: As users modify the equations or the initial input, the final output (y) is updated automatically.
- UI Design: The UI is pixel-perfect and follows the design closely. The cards are fixed in their positions with no drag-and-drop functionality required.

## Technologies Used
- React: The application is built with React to manage the component-based UI.
- TypeScript: The project uses TypeScript for type safety and a better developer experience.
- Vite: Vite is used as the build tool for fast development and optimized production builds.
- TailwindCSS: TailwindCSS is used for styling the application, providing utility-first CSS classes for a responsive and modular design.

## Setup & Installation
Make sure you have the following tools installed on your system:
- Node.js (v16 or higher)
- npm or Yarn

Steps to Run the App Locally:
1. Clone the repository:
   git clone https://github.com/yourusername/chain-calculator.git
   cd function-chain-calculator
2. Install dependencies (using npm or yarn):
   Using npm:
   npm install
   Using yarn:
   yarn install
3. Start the development server (using npm or yarn):
   Using npm:
   npm run dev
   Using yarn:
   yarn dev
4. Build for production (using npm or yarn):
   Using npm:
   npm run build
   Using yarn:
   yarn build

## File Structure
The project contains the following important directories and files:
- src/: Contains the source code for the application.
  - components/: React components for rendering function cards and calculating the results.
  - utils/: Utility functions for validation and calculation of mathematical operations.
  - App.tsx: Main component that ties everything together.
  - index.tsx: Entry point for the React app.
- public/: Static assets like images, icons, etc.
- tailwind.config.js: TailwindCSS configuration.
- vite.config.ts: Vite configuration file.
