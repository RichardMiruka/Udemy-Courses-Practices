// React components are JavaScript functions that return markup
function MyButton () {
  return (
    <button>
      I am a button
    </button>
  );
}

// Now that you’ve declared MyButton,
// you can nest it into another component:
export default function MyApp () {
  return (
    <div>
      <h1> Welcome to my App</h1>
      <MyButton /> // Nested into MyApp (which is another component) 
    </div>
  );
}
