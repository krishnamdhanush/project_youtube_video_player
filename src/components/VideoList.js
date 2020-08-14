import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  var listOfVideos;
  if (videos.length === 0) {
    listOfVideos = [];
    for (var i = 0; i < 4; i++) {
      listOfVideos.push(<VideoItem video={null} />);
    }
  } else
    listOfVideos = videos.map((video) => (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    ));

  return (
    <Grid container spacing={6}>
      {listOfVideos}
    </Grid>
  );
};
