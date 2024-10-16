const App = () => {
  return (
    <button
      onClick={async () => {
        const response = await fetch("api");
        const data = await response.text();
        console.log(data);
      }}
    >
      Click Me
    </button>
  );
};

export default App;
