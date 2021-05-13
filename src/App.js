import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import useSearch from "./hooks/useSearch";

function App() {
  const API_URL = "https://jsonmock.hackerrank.com/api/articles";

  const [posts, setposts] = useState([]);

  const { searchInput, setSearchInput, searchMatches, setSearchMatches } =
    useSearch(posts);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setposts(data.data);
        setSearchMatches(data.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Author Search</h1>
      <input
        placeholder="Search with author Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>

      <input
        placeholder="Search with author Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      {searchMatches.length > 0 ? (
        searchMatches.map((post, index) => <Card key={index} postData={post} />)
      ) : (
        <h2>No Matches Found.</h2>
      )}
    </div>
  );
}

export default App;
