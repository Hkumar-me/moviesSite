import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "../utils/axios";

function TopNav() {
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  const getSearches = async () => {
    try {
      const result = await axios.get(`/?s=${query}&apikey=da2a4ad4`);
      if (result.data && result.data.Search) {
        setSearchedData(result.data.Search);
        console.log(result.data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length !== 0) {
      getSearches();
    } else {
      setSearchedData([]);
    }
  }, [query]);

  return (
    <>
      <div className="w-full flex items-center justify-center mt-3 relative">
        <div className="search-bar-div px-4 pr-11 flex items-center justify-center gap-3 relative border-[.1px]  rounded-lg">
          <FaSearch className="text-xl" />
          <input
            type="text"
            className="w-[35vw] text-xl bg-transparent px-4 py-2 outline-none"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            placeholder="Search Anything to watch"
          />
          {query && (
            <RxCross2
              className="text-xl cursor-pointer absolute z-[999] right-[2%]"
              onClick={() => setQuery("")}
            />
          )}

          {searchedData.length > 0 && (
            <div className="show-searched-results z-[99999] rounded-lg max-h-[50vh] w-full left-1/2 translate-x-[-50%] bg-[#04293A] absolute top-[115%] overflow-auto p-3 flex flex-col items-center gap-2">
              {searchedData.map((movie, index) => (
                <div
                  key={index}
                  className="search-result rounded-lg hover:bg-[#0b1927] w-full flex items-start jutify-center gap-3"
                >
                  <div className="image w-24 h-36 rounded-lg p-2 overflow-hidden">
                    <img
                      src={movie?.Poster}
                      alt="poster"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="movie-info">
                    <h2 className="text-2xl font-semibold">{movie?.Title}</h2>
                    <h2 className="text-[15px]">{movie?.Type}</h2>
                    <h2 className="opacity-90">{movie?.Year}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TopNav;
