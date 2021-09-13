import React, { Component } from 'react';
import ConnectyCube from 'react-native-connectycube'


const credentials = {
    appId: 5100,
    authKey: 'tamRbcGccOADh9Y',
    authSecret: 'pjZbK9HgGfpOte4'
};

const config = {
    debug: { mode: 1 }
};


ConnectyCube.init(credentials, config);
