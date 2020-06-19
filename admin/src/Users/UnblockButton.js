import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { showNotification, UPDATE } from 'react-admin';
import dataProvider from '../Providers/dataProvider';
import { push } from 'react-router-redux';

class UnblockButton extends Component {
  handleClick = () => {
    const { push, record, showNotification } = this.props;
    let updatedRecord = { ...record, isBlock: false };
    updatedRecord.role = undefined;
    dataProvider(UPDATE, 'users', { id: record.id, data: updatedRecord })
      .then(() => {
        showNotification('User unblocked');
        push('/users');
        setInterval(() => (window.location.href = '/users'), 2000);
      })
      .catch((e) => {
        showNotification('Error: user not blocked', 'warning');
      });
  };

  render() {
    return (
      <Button onClick={this.handleClick} variant='outlined'>
        Unblock
      </Button>
    );
  }
}

UnblockButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  showNotification,
  push,
})(UnblockButton);
