import React from 'react';
import { Table, Col } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  }
];

function CourseContent({ videos }) {
  return (
    <div>
      <h1 className='tl'>Course Content</h1>
      <Col>
        <Table rowKey={(videos) => videos.id} dataSource={videos} columns={columns} />;
      </Col>
    </div>
  );
}

export default CourseContent;
