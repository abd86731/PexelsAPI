import React, { useState, useEffect } from "react";
import Search from "../components/Search.js";
import Picture from "../components/Picture.js";

const Homepage = (props) => {
  let { isSearch, setIsSearch, currentSearch, setCurrentSearch } = props;
  // states
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const apiKey = "iQ4ELLGHeuIrVdvVMnaq1PyFn0U2tX5vI5AunlKPrbj9mnuHQGSYNxwA";
  const initialUrl = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  // fetch data from the API
  const search = async (url) => {
    const fetchData = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "/application/json",
        Authorization: apiKey,
      },
    });
    let parsedData = await fetchData.json();
    setData(parsedData.photos);
    setPage(2);
    setIsSearch(true);
  };

  // load more pictures
  const loadMore = async () => {
    let newUrl;
    if (currentSearch) {
      // search
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    } else {
      // not search
      newUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    }

    const fetchData = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "/application/json",
        Authorization: apiKey,
      },
    });
    let parsedData = await fetchData.json();
    setData(data.concat(parsedData.photos));
    setPage(page + 1);
  };

  // fetch data when the page loads up
  useEffect(() => {
    if (!isSearch) search(initialUrl);
  }, [initialUrl, isSearch]);
  // ensure that currentSearch is not empty string
  useEffect(() => {
    if (currentSearch) search(searchUrl);
  }, [currentSearch, searchUrl]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePictures">
        <button onClick={loadMore}>More Pictures</button>
      </div>
    </div>
  );
};

export default Homepage;
