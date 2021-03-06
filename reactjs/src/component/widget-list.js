import React, {Component} from 'react';


class WidgetList extends Component {

  renderList() {
        return this.props.wlist.map((widget) => {
            return (
                <li
                    key={widget.name}
                    onClick={() => this.props.selectWidget(widget)}
                >
                    <a href="#">{widget.name}</a>
                </li>
            );
        });
    }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

WidgetList.propTypes = {
  wlist: React.PropTypes.array,
  selectWidget: React.PropTypes.func
};


export default WidgetList;
