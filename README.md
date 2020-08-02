# Amazing Store Client

This is the frontend React JS client that makes use of the **amazingstore-apis** backend to calculate the total for items purchased.

### Tools & Frameworks Used

Below are tools & frameworks used in creating this project:

- React 16.13+
- React Router
- React Redux
- Redux Toolkit
- Redux Observable
- Material UI
- Axios
- RxJS

### Design

The frontend client is written in Typescript for React JS. Redux is used to easily maintain state required. Redux Observable is used to handle the async GraphQL requests to the backend.

Every time the _Calculate Total_ button is clicked (OR Enter key is pressed), the client will send a GraphQL request to the backed passing the Cart Item data. The server will then calculate the total and send the result back to the client to be displayed.

### Running Locally

The client project was initialised using _create-react-app_ tool.

Please follow these steps to run this project locally:

1. Clone or download this project
2. Install yarn
3. Go to the project directory and type in **yarn install** to install packages
4. Type in **yarn start** to start the project
5. The frontend can now be loaded in a browser at http://localhost:3000
6. Please make sure the backend API project is already running before running this client
