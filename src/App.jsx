import "./App.css";
import Bookfinder from "./components/Bookfinder";
import MyContext from "./MyContext";
import BookDetails from "./components/BookDetails";
import mydata from "./assets/mydata";
import { useState } from "react";

function App() {
  const [bookTitle, setbookTitle] = useState("");
  const [data, setData] = useState(mydata);
  const [currBook, setCurrBook] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const providerValues = {
    bookTitle,
    setbookTitle,
    data,
    setData,
    isOpen,
    setCurrBook,
    currBook,
    setIsOpen,
  };
  return (
    <MyContext value={providerValues}>
      <Bookfinder />
      <BookDetails />
    </MyContext>
  );
}

export default App;
