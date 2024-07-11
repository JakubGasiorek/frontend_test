# Overview
This project is a React-based web application that showcases a dynamic content management interface. It includes a header, main content section with multiple blocks, and a footer with options to manage and display content dynamically. The application demonstrates the use of React hooks for state management and effects, as well as CSS for styling and transitions.

# Features
- Dynamic Content Management: Users can replace or append content dynamically based on selected options.
- Radio Button Form: A form with radio buttons to select different content options.
- Footer Options: A footer section with options to reset settings and display personal data.
- Interactive UI: Smooth transitions and visibility toggling for content sections.

# Usage

Main Content
The main content area consists of three blocks:
- Block One: Contains a radio button form to select content options.
- Block Two: Contains buttons to replace or append content based on the selected option.
- Block Three: Displays the used content.

Footer
The footer includes options to:
- Reset Settings: Resets the application state and hides the options.
- Show Personal Data: Displays predefined personal data.

# Interaction
Radio Button Form: Select an option to determine which content to display or append.
Replace Button: Replaces the current content with the selected option.
Append Button: Appends the selected content option to the existing content.
Footer Options: Hover over the footer button to display options and click to execute actions.

# Code Structure
App Component: The main component managing the overall state and rendering header, main content, and footer.
Header Component: Displays the header text.
MainContent Component: Manages and displays the main content blocks and handles content updates.
Footer Component: Manages footer options and handles user interactions.

# Styling
The application uses CSS for styling and transitions:
Transitions: Smooth transitions for content visibility and opacity.
Flexbox: Layout management for main content and footer options.