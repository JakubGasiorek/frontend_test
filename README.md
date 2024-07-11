# Additional tasks completed
 - Osadzenie całego zadania w JSowym frameworku. ✅
 - Brak plików graficznych w końcowym projekcie (brak plików typu jpg, gif, png, svg). ✅
 - CSS IS AWESOME w footerze - po najechaniu myszką ramka (bez tekstu) powinna wykonać animowany obrót. ✅
 - Zastosowanie BEM. ✅
 - Spełnianie zasad a11y.
 - Logiczne wykorzystanie jednostek rem, em, vh, vw (w efekcie jak najmniejsze użycie jednostki px) - w taki sposób by w efekcie responsywność spełniona została jak najmniejszą ilością kodu. ✅
 - Mobile first ✅
 - Doklejając treść sprawić by w ostatnim bloku treści były posortowane alfabetycznie. ✅
 - Przy doklejaniu treści w przypadku niemożliwości spełnienia warunku by była unikalna wyświetlić stosowny komunikat. ✅
 - Button w footerze ("pokaż") wysuwający ramkę bez użycia JSa. ✅
 - Rezultat prac wrzucić do podglądu na jakąś darmową platformę. ✅ <a href='https://jolly-puffpuff-acfa45.netlify.app' target="_blank">Site<a>.

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