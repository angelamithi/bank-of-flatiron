Royal Bank of Flatiron Transaction Tracker
This is a React application that allows users to track their transactions. The app fetches transaction data from a local server and provides functionality to add new transactions and search through existing transactions. Below, you'll find an overview of the main components and their functionalities:

Components

1. App
   • The main application component.
   • Displays the header, search bar, transaction form, and a table of transactions.
   • Fetches transaction data from the server and passes it to child components.
   • Allows the user to add new transactions and filter existing transactions.
2. Header
   • A simple header component that displays the bank's name.
3. Table
   • Renders a table to display transaction data.
   • Accepts an array of transactions as a prop and maps them to individual Transaction components for rendering.
4. Form
   • Allows users to input new transactions.
   • Takes user input for date, description, category, and amount.
   • Submits new transactions to the server and updates the list of transactions displayed in the table.
5. Transaction
   • A component for rendering an individual transaction.
   • Displays the date, description, category, and amount of a transaction.
6. Search
   • Renders a search bar to filter transactions.
   • Accepts user input and passes it to the App component for filtering transactions based on the description.

Usage

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Navigate to the project directory in your terminal and run the following commands to install react dependencies and start the development server:
   npm install
   npm start
4. You should see the application running in your web browser at http://localhost:3000.
5. Use the search bar to filter transactions based on their descriptions.
6. Add new transactions by filling out the form and clicking "Add Transaction."

Additional Information
• The app uses a local server running at http://localhost:3000/transactions to fetch and store transaction data. Make sure the server is set up and running properly.

License
This project is not licensed as it is used for educational purposes. Feel free to use and modify the code as per the license terms.
