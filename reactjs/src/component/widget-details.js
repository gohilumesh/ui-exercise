import React, {Component} from 'react';


class WidgetDetails extends Component {

  render() {
     if (!this.props.widget) {
         return (<div>Select a widget...</div>);
     }
     return (
         <div>
             <h2>name: {this.props.widget.name}</h2>
             <h3>size: {this.props.widget.size}</h3>
             <h3>capacity: {this.props.widget.capacity}</h3>
         </div>
     );
 }

}

export default WidgetDetails;
