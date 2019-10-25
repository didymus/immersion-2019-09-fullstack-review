import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import RepoList from './RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(username) {
    console.log(`${username} was searched`);
    // TODO
   //axios request here
   axios.post('/repos', { username });
  }

  render() {
    const { repos } = this.state;

    return (
      <div>
        <img src='https://vignette.wikia.nocookie.net/logopedia/images/5/5b/RepoMan1984logo.png/'></img>
        <RepoList repos={repos} />
        <Search onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
