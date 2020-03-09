import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

function mapDispatchToProps (dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}