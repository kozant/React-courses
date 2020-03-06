import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    label: ''
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ label: value });
  };

  render() {
    const { onSearchPanel} = this.props;
    const { label } = this.state;
    
    return (
      <form
				className='d-flex mt-1'
				onKeyUp={(e) => {
					e.preventDefault();
          onSearchPanel(label);
				}}
			>
        <input type="text" className="form-control search-input" placeholder="type to search" onChange={this.onChange} value={label}/>
      </form>
    );
  }
};

export default SearchPanel;
