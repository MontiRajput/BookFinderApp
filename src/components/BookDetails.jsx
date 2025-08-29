import { useContext } from "react";
import MyContext from "../MyContext";

const BookDetails = () => {
  const { currBook, setIsOpen, isOpen } = useContext(MyContext);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-blue-100 z-40 flex items-center justify-center background">
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white shadow-lg rounded-2xl p-6 z-50 "
        >
          {currBook ? (
            <>
              <i
                class="fa-solid fa-xmark absolute right-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              ></i>
              <h1 className="font-bold text-[20px] text-gray-600">
                Book Details
              </h1>
              <div className="flex  gap-20 mt-[10px] text-gray-800">
                <h2>
                  <i className="fa-solid fa-hashtag"></i> Title{" "}
                  <h2 className="text-gray-800">{currBook.title}</h2>
                </h2>
                <h2>
                  <i className="fa-solid fa-user-secret"></i> Author{" "}
                  <h2 className="text-gray-800">
                    {currBook.author_name?.map((author, idx) => (
                      <span key={idx}>{author} </span>
                    ))}
                  </h2>
                </h2>
              </div>
              <div className="flex gap-20 mt-[20px] text-gray-600">
                <h2>
                  {" "}
                  <i className="fa-solid fa-calendar-days"></i> Published{" "}
                  <h2 className="text-gray-800">
                    {currBook.first_publish_year}
                  </h2>
                </h2>
                <h2 className="">
                  <i className="fa-solid fa-earth-americas"></i> Language{" "}
                  <h2 className="text-gray-800">
                    {currBook.language?.map((lang, idx) => (
                      <span key={idx}>{lang} </span>
                    ))}
                  </h2>
                </h2>
              </div>

              <span className="bg-sky-600 mt-[20px] inline-block">
                Author Key : {currBook.author_key}
              </span>
            </>
          ) : (
            <p className="text-gray-400">Select a book to see details.</p>
          )}
        </div>
      </div>
    )
  );
};

export default BookDetails;
