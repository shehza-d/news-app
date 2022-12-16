import "./index.css";
import { useEffect, useState } from "react";
import loadingGif from "../../Assets/loading.gif";
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  //1
  const keys = [
    "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
    "b5a0240c74msh06cf676249a3419p10cc6ejsn1b0052d9147c",
    "5733c6d6b4mshbef5b96e75ac139p1d7985jsn3611aef79317",
  ];
  const random = Math.floor(Math.random() * 3);
  // console.log(random)

  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      setLoading(true);

      fetch("https://bing-news-search1.p.rapidapi.com/news/", {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": keys[random],
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      })
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

    fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": keys[random],
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
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
      {err ? <div className="errorr">{err}</div> : ""}
      <div className="contentSection">
        {data?.map((eachNews) => (
          <a
            className="link"
            href={eachNews?.url}
            target="_blank"
            rel="noreferrer"
            key={eachNews?.name}
          >
            ( eachNews?.image ?
            <div
              className="post"
              style={{
                backgroundImage: `url(${eachNews?.image?.thumbnail?.contentUrl
                  .replace("&pid=News", "")
                  .replace("pid=News&", "")
                  .replace("pid=News", "")}`,
              }}
            >
              :null)
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
