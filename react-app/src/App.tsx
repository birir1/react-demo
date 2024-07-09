// import Message from "./Message";
// import ListGroup from "./components/ListGroup";

// function App() {
//   const items = ["New York", "Tokyo", "Texas", "New Orleans", "Orlando"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return (
//     <div>
//       <Message />
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </div>
//   );
// }

// export default App;

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         You got <span>this</span> Birir!
//       </Alert>
//     </div>
//   );
// }

// export default App;

import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>
        Birir Button
      </Button>
    </div>
  );
}

export default App;
