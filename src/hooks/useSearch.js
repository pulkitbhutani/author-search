import { useEffect, useState } from "react";

const useSearch = (searchData) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchMatches, setSearchMatches] = useState(searchData);

  useEffect(() => {
    searchAuthors();
  }, [searchInput]);

  function searchAuthors() {
    let matchArray = [];
    searchData.forEach((post) => {
      if (post.author.toLowerCase().startsWith(searchInput) !== false) {
        matchArray.push(post);
        console.log(matchArray);
      }
    });
    setSearchMatches(matchArray);
  }

  return { searchInput, setSearchInput, searchMatches, setSearchMatches };
};

export default useSearch;
