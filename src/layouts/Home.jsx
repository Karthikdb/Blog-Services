import React, { Component } from 'react';
import fire from './config/Fire';


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (


Welcome to Home
               Logout

);

    }

}

export default Home;
