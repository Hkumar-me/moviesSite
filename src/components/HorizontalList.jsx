import React, { useState, useRef } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function HorizontalList() {
  const movieInfo = useRef([]);
  //   console.log(movieInfo);
  const showDetails = (ref) => {
    if (ref) {
      ref.style.top = "50%";
    }
  };

  const hideDetails = (ref) => {
    if (ref) {
      ref.style.top = "150%";
    }
  };

  let scrollLeftHorizontal = () => {
    const firstElement = movieInfo.current[0];
    const { width } = firstElement.getBoundingClientRect();
    const scrollableContainer = document.querySelector(".div-to-scroll");
    const currentScroll = scrollableContainer.scrollLeft;
    const maxScroll = 0; // Assuming leftmost scroll position is 0

    if (currentScroll === maxScroll) {
      // If already at the leftmost position, do nothing
      return;
    }

    const newScroll = Math.max(0, currentScroll - width);
    scrollableContainer.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  let scrollRightHorizontal = () => {
    const firstElement = movieInfo.current[0];
    const { width } = firstElement.getBoundingClientRect();
    const scrollableContainer = document.querySelector(".div-to-scroll");
    const currentScroll = scrollableContainer.scrollLeft;
    const maxScroll =
      scrollableContainer.scrollWidth - scrollableContainer.clientWidth;

    if (currentScroll === maxScroll) {
      // If already at the rightmost position, do nothing
      return;
    }

    const newScroll = Math.min(maxScroll, currentScroll + width);
    scrollableContainer.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mt-4 horizontal-div bg-[#04293A]/40 rounded-lg p-2 text-[#E8EAF5]">
      <div className="heading w-full flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold ">Trending</h1>
        <h2 className="text-xl font-semibold ">Options</h2>
      </div>

      <div className="w-full horizontal-movie-container h-[48vh] relative px-4 flex items-center gap-3 justify-start overflow-hidden">
        <div
          className="absolute top-[50%] translate-y-[-50%] left-0 bg-[#04293A] hover:bg-[#04293A]/90 p-3 rounded-full z-[9999] cursor-pointer"
          onClick={scrollLeftHorizontal}
        >
          <GrPrevious className="text-xl" />
        </div>
        <div
          className="absolute top-[50%] translate-y-[-50%] right-0 bg-[#04293A] hover:bg-[#04293A]/90 p-3 rounded-full z-[9999] cursor-pointer"
          onClick={scrollRightHorizontal}
        >
          <GrNext className="text-xl" />
        </div>
        <div className="div-to-scroll  w-full  h-[45vh] relative p-2  flex items-center overflow-x-scroll gap-3 justify-start ">
          {[1, 2, 4, 5, 5, 6, 6, 7, 3, 5, 2, 4].map((movie, index) => (
            <div
              key={index}
              className="w-[18%] shrink-0 relative single-movie-div transition duration-500  h-full bg-[#2a1998bf] overflow-hidden rounded-xl"
              onMouseEnter={() => showDetails(movieInfo.current[index])}
              onMouseLeave={() => hideDetails(movieInfo.current[index])}
            >
              <div className="poster w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1589502929089-931735c691a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover object-center"
                  alt="movie-poster"
                />
              </div>
              <div
                ref={(ref) => (movieInfo.current[index] = ref)}
                className="movie-info  w-full h-[50%] p-3 absolute transition-all duration-300 ease-in-out top-[150%] bg-gradient-to-b from-black/30 via-black/50 to-black flex flex-col items-start justify-center"
              >
                <h1 className="text-xl font-bold">Movie Name</h1>
                <h2 className="text-[15px] font-semibold opacity-90 italic">
                  Movie type
                </h2>
                <h3 className="opacity-80 italic">year</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalList;
