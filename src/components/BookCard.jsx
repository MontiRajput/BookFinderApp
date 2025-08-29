import { useContext } from "react";
import MyContext from "../MyContext";

const BookCard = () => {
  const { data, setCurrBook, setIsOpen } = useContext(MyContext);
  const handleClick = (book) => {
    setCurrBook(book);
    setIsOpen(true);
  };

  return (
    <div className=" p-[30px] flex flex-col   ">
      <h2 className="font-extrabold text-3xl">Featured Books</h2>
      <div className="flex flex-wrap gap-10 mt-[40px] justify-center">
        {data.docs.length == 0 ? (
          <div className="flex ">
            <h1 className="font-bold text-[40px] text-red-500">Not Found</h1>
          </div>
        ) : (
          data.docs.map((book, idx) => {
            return (
              <div
                onClick={() => handleClick(book)}
                key={idx}
                className="card flex items-center flex-col w-[250px] h-[230px] bg-slate-50 "
              >
                <div className=" w-[90%] rounded-lg opacity-90  flex justify-center items-center p-[20px] m-[20px]">
                  <i className="fa-solid fa-book-open fa-5x opacity-80"></i>
                </div>

                <h3 className="title font-bold text-gray-800">{book.title}</h3>
                <p className="self-start pl-[20px] pt-[5px] text-[15px] opacity-70">
                  {" "}
                  <i class="fa-solid fa-certificate text-green-700"></i>{" "}
                  Certified
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default BookCard;
