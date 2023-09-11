import React, { useEffect, useState } from "react";
import "./YouTubeVid.css";

function YouTube() {
  const [YTVs, setYTVs] = useState([]);
  const ytApi = process.env.REACT_APP_YTAPI;
  // console.log(ytApi);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${ytApi}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=12`
    )
      .then((response) => response.json())
      .then((data) => {
        const ytData = data.items;
        setYTVs(ytData);
      });
  }, []);

  // console.log(YTVs);

  return (
    <section>
      <div className="container">
        <div className="title-wraper mt-5">
          Latest Videos <br />
          <br />
        </div>
        <div className="row justify-content-center">
          {/* <div className='row'>
          <div className='col-md-6'> */}

          {YTVs.map((eachVid) => {
            let vidID = eachVid.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidID}`;
            let vidWrapper = (
              <div key={vidID} className="col-md-6">
                <div className="oneVid">
                  <div className="vidThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={eachVid.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="infoWrapper">
                    <div className="vidTitle">
                      <a href={vidLink} target="_blank">
                        {eachVid.snippet.title}
                      </a>
                    </div>
                    <div className="description">
                      {eachVid.snippet.description}
                    </div>
                    <div className="pdate">{eachVid.snippet.publishedAt}</div>
                  </div>
                </div>
              </div>
            );

            return vidWrapper;
          })}
          {/* </div> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default YouTube;
