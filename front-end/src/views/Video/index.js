import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Layout, Menu, Row } from 'antd';

import './index.css';

const { Content, Sider } = Layout;

function Video() {
  const [videos] = useState([
    {
      name: 'Phia sau 1 co gai',
      link: 'https://www.youtube.com/watch?v=vCIc1g_4JWM&list=TLGG09obL7yuUs8xMzA2MjAyMA'
    },
    {
      name: 'gai xinh review ca nha',
      link: 'https://www.youtube.com/watch?v=lrhIcSqJDYM'
    },
    {
      name: 'Gai xinh nhun nhay theo dieu nhac',
      link: 'https://www.youtube.com/watch?v=eP3DRMa5qho'
    }
  ]);
  const [CurrentVideo, setCurrentVideo] = useState(
    'https://www.youtube.com/watch?v=vCIc1g_4JWM&list=TLGG09obL7yuUs8xMzA2MjAyMA'
  );
  return (
    <div className='loading'>
      <Layout className='content bgcw site-layout-background'>
        <Sider className='site-layout-background' width={200}>
          <Menu mode='inline' style={{ height: '100%' }}>
            {videos.map((video, index) => (
              <Menu.Item key={index} onClick={() => setCurrentVideo(video.link)}>
                {video.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content className='bgcw'>
          <Row justify='center'>
            <ReactPlayer url={CurrentVideo} />
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default Video;
