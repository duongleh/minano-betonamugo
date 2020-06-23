import React from 'react';

const extractYoutubeId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  if (url) {
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  return false;
};

const videoThumbnailUrl = (record) => {
  const youtubeId = extractYoutubeId(record.url);
  const prefix = 'https://img.youtube.com/vi/';
  const suffix = '/0.jpg';
  if (youtubeId) {
    return `${prefix}${youtubeId}${suffix}`;
  } else {
    return '';
  }
};

const onVideoThumbnailClick = (url) => {
  // TODO: play video on click
  console.log(url);
};

const VideoThumbnail = (record) => {
  const url = videoThumbnailUrl(record);
  return (
    <div onClick={() => onVideoThumbnailClick(url)}>
      <img width='250' height='160' src={url} title={record.title} alt={record.title} />
    </div>
  );
};

export default VideoThumbnail;
