# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Doctor Appointment Booking System

This is a React-based web application for managing doctor appointments, featuring a searchable doctor list, profile pages, appointment booking, and status confirmation.


## Project Overview

This application allows users to:

- View a list of doctors.
- View detailed doctor profiles.
- Book appointments by selecting a date and time.
- View the booking status after confirming an appointment.

The app is designed to be responsive, supports dark mode, and uses TypeScript for type safety.

## Tools and Libraries Used

- **React**: Core framework for building the user interface.
- **React Router DOM**: Handles client-side routing for navigation between pages (e.g., `/`, `/doctor/:id`, `/appointment/:id`, `/booking-status`).
- **Lucide React**: Provides icons (e.g., ArrowLeft, Calendar) for a better user experience.
- **React Datepicker**: Enables date selection with a customizable calendar UI.
- **Tailwind CSS**: Used for styling with a utility-first approach, ensuring responsiveness and dark mode support.
- **TypeScript**: Adds static typing for better code reliability and maintainability.
- **React Context**: Manages global state (e.g., doctors list) to avoid prop drilling.

## Features

- **Doctor List**: Searchable doctor list that displays all available doctors.
- **Doctor Profile**: View detailed information about each doctor, including specialty, description, and availability.
- **Appointment Booking**: Select a doctor, choose an appointment date and time, and book an appointment.
- **Booking Status**: Confirmation page that displays appointment details once the booking is confirmed.
- **Responsive Design**: Optimized for all screen sizes with mobile-first design using Tailwind CSS.
- **Dark Mode**: Supports dark and light mode, ensuring a great user experience.

## Improvements with More Time

- **API Integration**: Replace the static doctors list with a backend API (e.g., REST or GraphQL) for real-time data.
- **Authentication**: Implement user login/registration to personalize appointments and store booking history.
- **Real-Time Availability**: Add dynamic time slot availability based on doctor schedules, possibly with WebSocket updates.
- **Payment Integration**: Include a payment gateway (e.g., Stripe) for booking fees.
- **Accessibility (a11y)**: Enhance with ARIA labels, keyboard navigation, and screen reader support.
- **Unit Tests**: Add Jest and React Testing Library for component and logic testing.
- **Performance Optimization**: Implement lazy loading for images and code splitting for larger apps.

## Challenges Faced and Solutions

- **Prop Drilling**: Passing doctors through multiple components caused complexity. Solved by implementing React Context to manage state globally.
- **Date Handling**: Ensuring consistent date formats between DatePicker and BookingStatus was tricky. Addressed by converting dates to ISO strings during navigation.
- **Responsive Design**: Aligning form elements across screen sizes was challenging. Managed with Tailwind’s responsive utilities (e.g., `md:` prefixes).
- **Theme Consistency**: Maintaining dark/light mode across components required careful class management. Handl
