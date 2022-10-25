import "./index.css";
import { useEffect, useState } from "react";
import loadingGif from "../../Assets/loading.gif";
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

 
  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      setLoading(true);
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

      fetch("https://bing-news-search1.p.rapidapi.com/news/", options)
        .then((response) => response.json())
        .then((response) => {
          setLoading(false);
          setData(response.value);
          console.log(response);
          setErr(response.message);
        })
        .catch((err) => {
          setLoading(false);
          // setErr(err?.response.message);
          console.error(err);
        });
    };
    getTrendingNews();
  }, []);

  const getNews = (e) => {
    e.preventDefault();
    //get news API function from search query
    setLoading(true);
    setData([]);
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
        setLoading(false);
        console.log(response);
        setData(response.value);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err?.message);
        // console.error(err);
      });
  };

  const dateFunction = (postDate) => {
    const formatter = new Intl.RelativeTimeFormat("en");
    const diff = new Date() - new Date(postDate);
    const d = formatter.format(Math.round(-diff / (1000 * 60 * 60)), "hour");
    // console.log(typeof(d));
    return d;
  };
  // console.log(err)
  return (
    <>
      <form className="inputForm" onSubmit={getNews}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search News topic"
        />
        <button type="submit">GO</button>
      </form>
      {loading ? (
        <div className="loadingDiv">
          <img src={loadingGif} className="loadingGif" alt="Loading" />
        </div>
      ) : (
        ""
      )}
      {err ? (
        <div className="errorr">
       {err}
        </div>
      ) : (
        ""
      )}
      <div className="contentSection">
        {data?.map((eachNews) => (
          <a
            className="link"
            href={eachNews?.url}
            target="_blank"
            rel="noreferrer"
            key={eachNews?.name}
          >
            <div
              className="post"
              style={{
                backgroundImage: `url(${eachNews?.image?.thumbnail?.contentUrl
                  .replace("&pid=News", "")
                  .replace("pid=News&", "")
                  .replace("pid=News", "")}`,
              }}
            >
              <div className="myH1">
                <h1>{eachNews?.name}</h1>
              </div>

              <h3>
                {eachNews?.description}
                {"...  "}
                <span className="dateSpan">
                  {" "}
                  ({dateFunction(eachNews?.datePublished)})
                </span>
              </h3>

              {/* <img
            src={eachNews?.image?.thumbnail?.contentUrl
              .replace("&pid=News", "")
              .replace("pid=News&", "")
              .replace("pid=News", "")}
            alt=""
          /> */}
            </div>
          </a>
        ))}
      </div>
    </>
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
