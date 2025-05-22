import "./index.css";
import { useEffect, useState } from "react";
import loadingGif from "../../Assets/loading.gif";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const keys = [
    "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
    "b5a0240c74msh06cf676249a3419p10cc6ejsn1b0052d9147c",
    "5733c6d6b4mshbef5b96e75ac139p1d7985jsn3611aef79317",
  ];
  const random = Math.floor(Math.random() * 3);

  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      setLoading(true);

      fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": "38810d57c8msh266288b78e7b9aep165162jsn37ce8c49208b",
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
      },
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
        console.error(err);
      });
  };

  const dateFunction = (postDate) => {
    const formatter = new Intl.RelativeTimeFormat("en");
    const diff = new Date() - new Date(postDate);
    const d = formatter.format(Math.round(-diff / (1000 * 60 * 60)), "hour");
    return d;
  };

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
      {err && <div className="errorr">{err}</div>}
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
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
