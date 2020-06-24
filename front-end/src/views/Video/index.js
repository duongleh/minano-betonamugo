import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Layout, Menu, Row, Col, Slider, Checkbox } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import './index.css';
import RedirectTo from 'components/RedirectTo';
import Duration from './Duration';

const { Content, Sider } = Layout;

function Video() {
  const location = useLocation();
  const { id } = useParams();
  const [videos, setVideo] = useState(null);
  const [CurrentVideo, setCurrentVideo] = useState(null);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(0);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const req = await axios.get(
        `http://localhost:4000/api/v1/videos?filter=courseId||$eq||${id}`
      );
      setVideo(req.data);
      if (req.data.length > 0) setCurrentVideo(req.data[0]);
    };

    fetchVideo();
  }, [id]);

  useEffect(() => {
    const fetchProgress = async () => {
      const req = await axios.get(
        `http://localhost:4000/api/v1/enrollments/${location.state.enrollment.id}/progress`
      );
      setProgress(req.data);
    };

    fetchProgress();
  }, [location.state]);

  const handleProgress = (state) => {
    if (state.playedSeconds !== 0 && duration !== 0) {
      setSeeking((state.playedSeconds / duration) * 100);
      setPlayed(state.playedSeconds);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleEnded = async () => {
    const req = await axios.post(
      `http://localhost:4000/api/v1/enrollments/${location.state.enrollment.id}/progress`,
      {
        videoId: CurrentVideo.id
      }
    );
    if (req.status === 201) fetchProgress();
  };

  const fetchProgress = async () => {
    const req = await axios.get(
      `http://localhost:4000/api/v1/enrollments/${location.state.enrollment.id}/progress`
    );
    // return progress radious
    setProgress(req.data);
  };

  return (
    <div className='loading'>
      {!location.state ? (
        <RedirectTo />
      ) : (
        <Layout className='content bgcw site-layout-background'>
          {videos ? (
            <Sider className='site-layout-background' width={200}>
              <Menu mode='inline' style={{ height: '100%' }}>
                {videos.map((video, index) => (
                  <Menu.Item key={index} onClick={() => setCurrentVideo(video)}>
                    {!!progress && progress.completedVideo.includes(video.id) ? (
                      <Checkbox checked style={{ marginRight: '10px' }} />
                    ) : (
                      <Checkbox style={{ marginRight: '10px' }} />
                    )}

                    {video.title}
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
          ) : (
            <></>
          )}
          {CurrentVideo ? (
            <Content className='bgcw'>
              <Row justify='center'>
                <ReactPlayer
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                  onEnded={handleEnded}
                  url={CurrentVideo.url}
                />

                <Col span={15}>
                  <Slider value={seeking} />
                  <Duration seconds={played} /> : <Duration seconds={duration} />
                </Col>
              </Row>
            </Content>
          ) : (
            <></>
          )}
        </Layout>
      )}
    </div>
  );
}

export default Video;
