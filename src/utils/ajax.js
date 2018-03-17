"use strict";

import {
  defaultRequestHead,
  host
} from './config';
import APIs from "./api";
// const ENV = process.env.NODE_ENV;
const hostname = window.location.hostname;

let requestHead = '';

var Ajax = function(seting) {
  seting = seting || {};
  seting.method = seting.method.toUpperCase() || 'POST';
  seting.url = seting.url || '';
  seting.async = seting.async || true;
  seting.data = seting.data || {};


  var postData = {};
  var getDataUrl = host + APIs[seting.url];

  if (seting.method == 'GET') {
    var params = [];
    Object.keys(seting.data).forEach((keys) => {
      params.push(keys + '=' + seting.data[keys]); // 这里可以设置请求参数
    });
    getDataUrl = getDataUrl + '?' + params.join('&');
  } else if (seting.method == 'POST') {
    postData = JSON.stringify(seting.data);
  }


  if(hostname == '127.0.0.1' || hostname == 'localhost' || hostname == '172.16.20.78'){
    getDataUrl = host + seting.url+'.json';
  }

  // if (ENV == 'dev' || ENV == 'test') {
  //   getDataUrl = host + seting.url + '.json';
  // }


  if (seting.requestHead) {
    requestHead = Object.assign({}, defaultRequestHead, seting.requestHead);
  }


  return new Promise((resolve, reject) => {
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open(seting.method, getDataUrl, seting.async);
    Object.keys(requestHead).forEach((keys) => {
      xhr.setRequestHeader(keys, requestHead[keys]); // 这里可以设置请求头
    });

    if (seting.method == 'GET') {
      xhr.send();
    } else if (seting.method == 'POST') {
      xhr.send(postData);
    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            reject(e);
          }
          if (response) {
            resolve(response, xhr.status, xhr);
          }
        } else {
          reject(xhr);
        }
      }
    };

  });
};

export default Ajax;
