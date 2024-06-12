// React components are JavaScript functions that return markup
function MyButton() {
  return (
    <button>
      I am a button
    </button>
  );
}

// Now that we have declared MyButton,
// we can nest it into another component:
export default function MyApp() { // This is the main component in the file
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
      {/* Nested into MyApp (which is another component) */}
    </div>
  );
}

// Notice that <MyButton /> starts with a capital letter.
// That’s how you know it’s a React component.
// React component names must always start with a capital letter