import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Col, Input, Rate, Button, Row } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const { TextArea } = Input;

const Review = ({ review, fetchCourse, enrollment }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [comment, setComment] = useState('');
  const [star, setStar] = useState('');

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <span key='comment-basic-like'>
      <Tooltip title='Like'>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
          onClick: like
        })}
      </Tooltip>
      <span className='comment-action'>{likes}</span>
    </span>,
    <span key='comment-basic-dislike'>
      <Tooltip title='Dislike'>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined, {
          onClick: dislike
        })}
      </Tooltip>
      <span className='comment-action'>{dislikes}</span>
    </span>,
    <span key='comment-basic-reply-to'>Reply to</span>
  ];

  const submitReview = async () => {
    // TODO test
    const req = await axios.patch(`http://localhost:4000/api/v1/enrollments/${enrollment.id}`, {
      rate: star,
      comment
    });
    if (req.status === 200) {
      fetchCourse();
      setComment('');
      setStar(0);
    }
  };

  return (
    <Col span={24} className='tl'>
      <h1 className='tl'>Review</h1>
      {enrollment.id ? (
        <Col>
          <TextArea rows={4} onChange={(event) => setComment(event.target.value)} />
          <Col>
            <Row justify='end'>
              <Rate
                allowHalf
                onChange={(event) => setStar(event)}
                style={{ marginRight: '15px' }}
              />
              <Button onClick={() => submitReview()} type='primary'>
                Submit
              </Button>
            </Row>
          </Col>
        </Col>
      ) : (
        <></>
      )}

      <hr />
      {review ? (
        review.map((comment) => {
          if (comment.comment) {
            return (
              <Col key={comment.id}>
                <Comment
                  actions={actions}
                  author={comment.user.name}
                  avatar={
                    <Avatar
                      // src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                      alt={comment.user.name}
                    >
                      {comment.user.name[0]}
                    </Avatar>
                  }
                  content={<p>{comment.comment}</p>}
                  datetime={
                    <Tooltip title={moment().format(comment.createdAt)}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              </Col>
            );
          } else {
            return '';
          }
        })
      ) : (
        <></>
      )}
    </Col>
  );
};

export default Review;
