import Props from "./components/props";
const item = {
  author: "João",
  favBook: "O Hobbit"
}
function App() {
  return (
    <main>
      <Props props={item}/>
    </main>
  );
}
export default App;