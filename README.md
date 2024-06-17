# Shopping List Application for Slingr

This repository contains a full-stack shopping list application. The backend is built with Node.js and Express, connected to a MongoDB database hosted on the cloud. The frontend is developed using React and TypeScript, templated with Vite.

## Styling
Styled with Material-UI and styled-components.

## State
State management with Zustand and TanStack React Query.

## Features
It allows you to create items that contain a name, description and an amount. You can edit any key of the item, mark them "purchased/completed" as well as delete them. I've decided to map the property "amount/quantity" to the data model instead of adding several repeated items at once to the list, and also did not repeat the main navbar in the "adding/editing" window, though I would have cleared-up requirements with the team in a real life scenario. 
I've added simple validations such as not allowing the user to create an item with blank name or description, displaying a toast when attempted. 


## Folder Structure

### Backend (API)

- **api/server.js**: Entry point to start the Express server.
- **api/config**: Configuration files.
- **api/routes**: Express routes to handle API endpoints.
- **api/controllers**: Logic for handling various routes and actions.
- **api/middleware**: Middleware functions for handling requests and responses.
- **api/models**: Mongoose schemas and models for MongoDB collections.
- **api/db.js**: Database connection logic for MongoDB.

### Frontend (Client)

- **client/src/App.tsx**: Main App component.
- **client/src/Layout.tsx**: Layout component for consistent UI structure, which includes the navbar, MUI css reset component and the modal dialog.
- **client/src/main.tsx**: Entry point for the React application.
- **client/src/components**:
  - **Modal**: Confirmation modal, mostly used for delete actions.
  - **Button**: Custom button component wrapping the MaterialUI one.
  - **Card**: Custom card component for displaying items.
  - **EmptyListPanel**: Component displayed when the shopping list is empty.
  - **NavBar**: Navigation bar component.
  - **ScreenSpinner**: Loading spinner for async actions intented to be used for the full application area.
  - **Select**: Custom select input component.
  - **TextArea**: Custom text area component.
- **client/src/config**:
  - **routes**: Application routes configuration for the BrowserRouter including route string paths.
  - **theme**: Theme configuration for Material-UI.
- **client/src/state**: Zustand store configuration and TanStack React Query setup.
- **client/src/types**: TypeScript type definitions.
- **client/src/views**:
  - **ShoppingList**: Main view for displaying the shopping list.
  - **EditItem**: View for editing an existing item and adding a new one.
  - **ErrorPage**: Fallback view for undefined routes.

## Technologies Used

- **Backend**:
  - **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.
  - **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - **MongoDB**: A NoSQL database that uses a document-oriented data model, making it easy to store and retrieve data as JSON-like documents.
  - **Mongoose**: An elegant MongoDB object modeling tool designed to work in an asynchronous environment, providing a straightforward schema-based solution to model application data.

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces, allowing developers to create large web applications that can update and render efficiently in response to data changes. Here I use version 18.2.0.
  - **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, providing optional static typing and class-based object-oriented programming.
  - **Vite**: A fast development build tool that aims to provide a leaner and faster development experience for modern web projects.
  - **Zustand**: A small, fast, and scalable bearbones state management solution using simplified Flux principles requiring a lot less boilerplate than Redux and following modern patterns.
  - **TanStack React Query**: Powerful data synchronization and caching library for React, designed to make fetching, caching, and synchronizing server state easy and efficient.
  - **Material-UI**: A popular React UI framework that provides a set of accessible and customizable components based on Google's Material Design guidelines.
  - **styled-components**: A library for React and React Native that allows developers to use component-level styles in their applications, written with a mixture of JavaScript and CSS.

## Getting Started

### Prerequisites

- Node.js and npm installed (LTS version > 18.14)

### Installation

1. **Clone the repository**:
```sh
git clone https://github.com/yourusername/shopping-list.git
cd shopping-list
```

Note: You must run the api and client in two separate terminal instances.

2. **Backend setup**:
```sh
cd api
npm i
npm run dev
```
(Alternatively you can do "npm run prod" to connect to a "production" database).

3. **Frontend setup**:
```sh
cd client
npm i
npm run dev
```
Feel free to contact me if you have any questions. I'm available at danieltkach@gmail.com

## Screenshots
![image](https://github.com/danieltkach/slingr-challenge/assets/70539591/8d0008f3-0f2b-4046-a55f-a0fe9e0f94db)

![image](https://github.com/danieltkach/slingr-challenge/assets/70539591/8f9b6eae-fffb-4094-a5c3-45b175b3e33d)

![image](https://github.com/danieltkach/slingr-challenge/assets/70539591/31bd53df-3d6e-4660-b05c-a9bac1ef5423)

![image](https://github.com/danieltkach/slingr-challenge/assets/70539591/2de78b75-3fd1-463b-8ebb-3ab406ddf67d)



