import React from 'react';
import { List, Avatar } from 'antd';

function CourseContent({ videos }) {
  return (
    <div>
      <h1 className='tl'>Course Content</h1>
      <List
        itemLayout='horizontal'
        dataSource={videos}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{videos.indexOf(item) + 1}</Avatar>}
              title={item.title}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default CourseContent;
