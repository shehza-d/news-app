import { useEffect, useState } from "react";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      const options = {
        method: "GET",    
        headers: {
          // "X-Search-Location": "ijij",
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      fetch(
        "https://bing-news-search1.p.rapidapi.com/news/",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setData(response.value);
        })
        .catch((err) => console.error(err));
    };
    getTrendingNews();
  }, []);

  const getNews = (e) => {
    e.preventDefault();
    //get news API function from search querry
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.value);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <form
      //  onSubmit={getNews}
       >
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search News topic"
        />
        <button type="submit">get</button>
      </form>
      {data.map((eachNews) => (
        <div className="post" key={eachNews?.name}>
          <a
            className="link"                            
            href={eachNews?.url}
            target="_blank"
            rel="noreferrer"
          >
            {eachNews?.name}
          </a>

          <span>{eachNews?.datePublished}</span>

          <h3>{eachNews?.description}</h3>

          <img
            src={eachNews?.image?.thumbnail?.contentUrl
              .replace("&pid=News", "")
              .replace("pid=News&", "")
              .replace("pid=News", "")}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Content;

// //trending fetch code//
// const options = {
//   method: "GET",
//   headers: {
//     "X-BingApis-SDK": "true",
//     "X-RapidAPI-Key": "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
//     "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//   }, };
// fetch(
//   "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
// //trending fetch code//

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   } };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
