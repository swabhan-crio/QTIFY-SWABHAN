import { Navbar } from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchNewalbums, fetchSongs, fetchTopalbums } from "./api/api";

function App() {
  const [data, set_data] = useState({});

  const generatedata = (key, source) => {
    source().then((data) => {
      set_data((prevdata) => {
        return { ...prevdata, [key]: data };
      });
    });
  };
  useEffect(() => {
    generatedata("topalbums", fetchTopalbums);
    generatedata("newalbums", fetchNewalbums);
    generatedata("songs", fetchSongs);
  }, []);

  const { topalbums = [], newalbums = [], songs = [] } = data;

  return (
    <div>
      <Navbar searchdata={[...topalbums, ...newalbums]} />
      <Outlet context={{ data: { topalbums, newalbums, songs } }} />
    </div>
  );
}

export default App;
