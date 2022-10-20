import { useState } from "react";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchTerm, setSearchTerm] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  fetch(
    "https://bing-news-search1.p.rapidapi.com/news/search?q=%3CREQUIRED%3E&freshness=Day&textFormat=Raw&safeSearch=Off",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    const getNews = (e) => {
      e.preventDefault();
    };

  return (
    <div className="App">
      testing github action with firebase
      
      <form>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">get</button>
        {searchTerm}
      </form>
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
