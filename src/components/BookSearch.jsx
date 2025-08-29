import { useContext } from "react";
import hero_image from "../assets/hero_image.png";
import MyContext from "../MyContext";
const BookSearch = () => {
  const { bookTitle, setbookTitle } = useContext(MyContext);
  const options = [
    "History",
    "Thriller",
    "Scince",
    "Technology",
    "Mystory",
    "Biology",
    "Fantacy",
    "Romance",
    "Fiction",
  ];
  return (
    <div className="relative w-full   h-[500px]  overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero_image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[40px] items-center justify-center h-full text-white p-[10px]">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Discover Your Next
          <br></br>
          <span className="text-amber-300">Great Read</span>
        </h1>
        <p className="text-center">
          Explore thousands of books, read reviews, and find your perfect
          literary companion
        </p>
        <div className="input flex items-center justify-center">
          <input
            value={bookTitle}
            onChange={(e) => setbookTitle(e.target.value)}
            placeholder="Search Books by their title"
          />
        </div>

        <select
          className="relative right-60"
          onChange={(e) => setbookTitle(e.target.value)}
        >
          <option defaultChecked value={""}>
            All Genres
          </option>
          {options.map((value, idx) => {
            return (
              <option value={value} key={idx}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default BookSearch;
