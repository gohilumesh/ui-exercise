import React, {
  Component
} from 'react';

import API from './../services/api';
import WidgetList from './widget-list';
import WidgetDetails from './widget-details';

class WidgetContainer extends Component {

  state = {
    widgets: [],
    widget: null
  };

  selectWidget = (selectedWidget) => {
    this.setState({
      widget: selectedWidget
    });
  }

  render() {
    return (
      <div>
        <h1> List of available widgets</h1>
        <div className="widget-list">
          <WidgetList wlist={this.state.widgets} selectWidget={this.selectWidget}/>
        </div>
        <div className="widget-details">
          <WidgetDetails widget={this.state.widget} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    let widgets = new API().getWidgets();
    widgets.then(data => {
      this.setState({
        widgets: data
      });
    });
  }

}


export default WidgetContainer;
