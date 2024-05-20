# Getting Started with Create React App

This project is created by Parikshit singh and is an assessment submitted to bitespeed.
The project is also available on [vercel](https://bite-speed-lac.vercel.app/).

## Description about the project

This is a simple chat flow builder project. The project has the following key features: 
-   The left-hand side is the flow UI.
-   Right-hand side is the configurable side.
-   There's only one node configuration i.e. for Message Nodes but the system is scalable and we can add more nodes.
-   You can drag and drop the nodes from right side onto the flow panel.
-   Clicking on a node would give you the option to edit the text.
-   You can also drag nodes within the flow panel.
-   Create connection between two nodes by creating an edge.
-   To delete an edge, simply click on the edge you wanna delete.
-   Once after finishing your setup, click on the `save changes` button to save changes to cloud(prototype).
-   A loader is also introduced considering the user experience.
-   Saving has to follow two condition,
    - The flow can only have one edge originating from a source handle.
    - More than one Node has empty target handles .
-   After successful operations/errors, a snackbar would appear to the user.

## Available Scripts

To install dependencies:
### `npm i`

To Start the project:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
