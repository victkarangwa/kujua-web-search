import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { queryLink } from '../../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';

class SingleResults extends Component {
  handleClick() {
    try {
          const { get } = require('axios');
    get('https://shorturl-sfy-cx.p.rapidapi.com/?url=' + this.props.resultSubLink, {
      headers: {
        'x-rapidapi-host': 'shorturl-sfy-cx.p.rapidapi.com',
        'x-rapidapi-key': '1f778b39fcmshedfb4cd05ee9dd6p18bce6jsnd389bbc7715b'
      }
    })
      .then(response => response.data)
      .then(res => {
        const shortnedURL = res.split('"')[1];
        navigator.clipboard.writeText(shortnedURL);
        this.props.queryLink(shortnedURL);
     toast('Link copied!')
      })
    } catch (error) {
       console.log(err);
    }
  }
  render() {
    const {
      resultTitle,
      resultURL,
      resultSubLink,
      resultParagraph
    } = this.props;
      return (
        <div className='single-result'>
          <div className='link-icon-container'>
            <a className='result-title' href={resultSubLink}>
              {resultTitle}
            </a>
            <img
              onClick={() => this.handleClick()}
              className='icon'
              src={`https://res.cloudinary.com/victorkarangwa4/image/upload/v1576668307/icons/icons8-link_qx4prk.png`}
              alt='criminal user'
            />
          </div>
          <p className='result-sub-link'>{resultSubLink}</p>
          <p className='result-paragraph'>{resultParagraph}</p>
          <p className='result-paragraph'>
            Shortned URL:{this.props.queryLink}
          </p>
        </div>
      );
  }
}
SingleResults.propTypes = {
  resultTitle: PropTypes.string.isRequired,
  resultURL: PropTypes.string.isRequired,
  resultSubLink: PropTypes.string.isRequired,
  resultParagraph: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { queryLink })(SingleResults);
