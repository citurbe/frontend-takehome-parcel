import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import List from './components/List/List';
import gemApi from './api/index';
import { findSaved } from './util/findSaved';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      gemList: [],
      savedGems: []
    };
  }

  componentDidMount() {
    const loadFromStorage = localStorage.getItem('savedGems');
    if (loadFromStorage) {
      this.setState({ savedGems: JSON.parse(loadFromStorage) });
    }
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  searchGems() {
    const queryString = this.state.searchText;
    gemApi.searchGems(queryString).then(resp => {
      this.setState({ gemList: resp.data });
    });
  }

  toggleSave(name) {
    const updated = findSaved(name, this.state.gemList, this.state.savedGems);
    this.setState({ savedGems: updated });
    localStorage.setItem('savedGems', JSON.stringify(updated));
  }

  showSaved() {
    this.setState({ gemList: this.state.savedGems, searchText: '' });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <Search
            handleChange={this.handleChange.bind(this)}
            searchText={this.state.searchText}
            handleSearch={this.searchGems.bind(this)}
            showSaved={this.showSaved.bind(this)}
          />
          <List
            toggleSave={this.toggleSave.bind(this)}
            gemList={this.state.gemList}
            savedGems={this.state.savedGems}
          />
        </div>
      </div>
    );
  }
}

export default App;
