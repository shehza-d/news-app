const Content = () => {
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

  return <div className="App">hello</div>;
};

export default Content;

//trending fetch code//
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

fetch('https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
//trending fetch code//














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
