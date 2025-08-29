import { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import MyContext from "../MyContext";
const AllBooks = () => {
  const { bookTitle, setData } = useContext(MyContext);
  const getData = async (bookTitle) => {
    const res = await fetch(
      `https://openlibrary.org/search.json?title=${bookTitle}`
    );
    const allBooks = await res.json();

    setData(allBooks);

    // console.log(data);
  };
  useEffect(() => {
    if (bookTitle.trim() !== "") {
      getData(bookTitle);
    }
  }, [bookTitle]);
  return (
    <>
      <BookCard />
    </>
  );
};
export default AllBooks;
