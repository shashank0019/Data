# Datastore Request Component

This component implements a datastore access request form based on the provided Figma design.

## Features

- **Step-by-step workflow**: Employee → Manager → IT Team approval process
- **Access type selection**: Read or Read/Write permissions
- **File path input**: With attachment functionality
- **Justification field**: Multi-line text input for request reasoning
- **Responsive design**: Works on desktop and mobile devices
- **Material-UI integration**: Uses MUI components for consistent styling

## Components

### DatastoreRequest (`src/components/datastore1.jsx`)
Main form component that includes:
- Progress stepper showing approval workflow
- Radio buttons for access type selection
- Text input for datastore path
- Textarea for justification
- Cancel and Submit buttons

### Styling (`src/styles/datastore.css`)
Custom CSS that provides:
- Blue color scheme matching the design
- Responsive layout
- Hover effects and transitions
- Custom stepper styling
- Form validation styling

## Usage

```jsx
import DatastoreRequest from './components/datastore1';

function App() {
  return <DatastoreRequest />;
}
```

## Routing

The component is accessible at `/datastore` route in the main application.

## Icons

All icons are sourced from Material-UI Icons library:
- Storage icon for datastore
- Person, SupervisorAccount, Computer for workflow steps
- AttachFile for path input

## Customization

To modify the component:
1. Update state management in `datastore1.jsx`
2. Modify styling in `datastore.css`
3. Add new icons to `assets/icons/index.js`
4. Update routing in `App.jsx`
