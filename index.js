const express=require('express');
var Podio = require('podio-js').api;
var podio = new Podio({ 
    authType: 'client', 
    clientId:  'teslalifts1',
    clientSecret: 'lB2s8P6O21FLyQBrjWEmPtro0iG9NIlCmbuONBqcvjyZzJ6U8IJqd0ZrIJzT0N6b', 
  });
  podio.authenticateWithApp('25225692', '58e4fe4a6ae14bb6b4a047f88fcdacef', (err) => {

    if (err) throw new Error(err);
  
    podio.isAuthenticated().then(() => {
      // Ready to make API calls in here...
      podio.request('GET', '/item/app/25225692').then(function (responseData) {
        console.log(responseData);
        res.send(responseData);
      })
    }).catch(err => console.log(err));
  
  });



  