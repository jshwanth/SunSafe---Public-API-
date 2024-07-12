# Sun Safe - UV Index Checker

Sun Safe is a web application that checks the UV index based on a user-provided latitude and longitude. It informs users whether they should apply sunscreen based on the UV index and provides the safe exposure time if available.

## Features

- **Check UV Index**: Enter latitude and longitude to fetch the current UV index for that location.
- **Sunscreen Recommendation**: Based on the UV index, the app advises whether sunscreen is needed.
- **Safe Exposure Time**: If available, displays the safe exposure time for the current UV index.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express**: Web framework for Node.js.
- **Axios**: HTTP client for making API requests.
- **EJS**: Templating engine for rendering HTML.
- **CSS**: Styling the frontend interface.
- **OpenUV API**: Provides real-time UV index data.

## Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd uv-index-checker
2. **Install dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
Create a .env file in the root directory with your OpenUV API key:

   ```plaintext
   OPENUV_API_KEY=your_openuv_api_key_here

4. **Start the server**:
   ```bash
   npm start

5. **Open the application**:
   Open your web browser and go to http://localhost:3000.

## Usage:
Enter the latitude and longitude of your location and click on "Check UV Index".
The app will fetch the current UV index and display whether sunscreen is recommended.
If available, it will also display the safe exposure time for the current UV index.


## License:
This project is licensed under the MIT License - see the LICENSE file for details.
