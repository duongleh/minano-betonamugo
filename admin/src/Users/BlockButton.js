import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { showNotification, UPDATE } from 'react-admin';
import dataProvider from '../Providers/dataProvider';
import { push } from 'react-router-redux';

class BlockButton extends Component {
  handleClick = () => {
    const { push, record, showNotification } = this.props;
    dataProvider(UPDATE, 'users', { id: record.id, data: { isBlock: true } })
      .then(() => {
        showNotification('User blocked');
        push('/users');
        setInterval(() => (window.location.href = '/users'), 2000);
      })
      .catch((e) => {
        showNotification('Error: user not blocked', 'warning');
      });
  };

  render() {
    return (
      <Button onClick={this.handleClick} variant='outlined' color='secondary'>
        Block
      </Button>
    );
  }
}

BlockButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  showNotification,
  push,
})(BlockButton);
