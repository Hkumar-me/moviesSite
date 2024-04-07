import React, { useEffect, useState } from "react";
import axios from "../utils/axios";


function Wallpaper() {
  let [wallpaper, setWallpaper] = useState("");
  let getWallpaper = async () => {
    try {
    //   const result = await axios.get(`/?s=game&apikey=da2a4ad4`);
      
      console.log(Math.floor(Math.random() * result.data.Search.length));
      setWallpaper(
        result.data.Search[Math.floor(Math.random() * result.data.Search.length)]?.Poster
      );
    } catch (error) {
      console.log(error);
    }
  };

//   useEffect(() => {
//     getWallpaper();
//   },[]);

  return (
    wallpaper ? <div className="w-full h-[60vh] p-2 mt-5">
    <img src={wallpaper} alt="wallpaper" className="w-full h-full object-cover object-center rounded-lg " />
  </div> :<div className="w-full flex items-center justify-center h-[60vh]  p-2">
    <h1>Loading...</h1>
  </div>
  );
}

export default Wallpaper
