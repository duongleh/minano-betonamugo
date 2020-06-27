import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import './index.css';

function Certificate() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const credentials = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    setUser(credentials.name);
  });

  return (
    <div style={{ margin: '30px 0px' }}>
      <div className='center pm-certificate-container'>
        <div className='outer-border'></div>
        <div className='inner-border'></div>

        <div className='pm-certificate-border col-xs-12'>
          <div className='row pm-certificate-header'>
            <div className='pm-certificate-title col-xs-12 margin-0 text-center'>
              <h2 className='sans'>CERTIFICATE OF EXCELLENCE</h2>
            </div>
          </div>

          <div className='row pm-certificate-body'>
            <div className='pm-certificate-block'>
              <div className='col-xs-12'>
                <div className='row'>
                  <div className='col-xs-2'>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-certificate-name margin-0 col-xs-8 text-center'>
                    <span className='pm-name-text'>This certificate is presented to</span>
                  </div>
                </div>
              </div>

              <div className='col-xs-12'>
                <div className='pm-certificate-name underline margin-0 col-xs-8 text-center'>
                  <span className='nameOfUser bold Rochester'>{user}</span>
                </div>
                <div className='col-xs-2'>{/* <!-- LEAVE EMPTY --> */}</div>
              </div>

              <div className='col-xs-12'>
                <div className='pm-certificate-name margin-0 col-xs-8 text-center'>
                  <p className='bold'>Has been recognized for outstanding achievement</p>
                  <p className='bold'>at Basic fan dance course</p>
                </div>
                <div className='col-xs-2'>{/* <!-- LEAVE EMPTY --> */}</div>
              </div>
            </div>
          </div>

          {/* <!-- FOOTER --> */}
          <Row className='pm-certificate-footer'>
            <Col span={24}>
              <Row className='row'>
                <Col span={12} className='text-center'>
                  <div className='pm-certificate-name underline margin-0 text-center'>
                    <p>DATE</p>
                  </div>
                  <p>
                    <strong>12/04/2020</strong>
                  </p>
                </Col>
                <Col span={12} className='text-center'>
                  <div className='pm-certificate-name underline margin-0 text-center'>
                    <p>
                      <strong>From</strong>
                    </p>
                  </div>

                  <p className='Rochester'>Nguyễn Văn Lâm</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
