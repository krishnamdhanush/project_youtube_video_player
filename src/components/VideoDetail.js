import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video)
    return (
      <React.Fragment>
        <Paper
          elevation={6}
          style={{
            height: "700px",
            width: "900px",
            margin: "10px",
            position: "relative",
            backgroundColor: "#0049B7",
            backgroundImage:
              "url(https://www.wowpatterns.com/assets/files/resource_images/geometric-shapes-pattern.jpg)",
            // textAlign: "center",
            // paddingTop: "auto",
            // padding: "100px",
            // paddingLeft: "50%",
          }}
          square
        ></Paper>
      </React.Fragment>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder='2px'
          height='100%'
          width='100%'
          title='Video Player'
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant='h4'>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle1'>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle2'>{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
