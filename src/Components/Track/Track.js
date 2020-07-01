import React from 'react';
import './Track.css';

class Track extends React.Component{

  // add or remove songs
  renderAction(){
    if(this.props.isRemoval){
      return <button className='Track-action'> - </button>
    }else {
      return <button className='Track-action'> + </button>
    }
    
  }
  render(){
    return(
      <div className="Track">
      <div className="Track-information">
      <h3>{this.props.track.name}</h3> 
      <p> {this.props.track.artist}| {this.props.track.album} </p> 
      </div>
      {/* dynamic button based on isRemoval prop */}
      {this.renderAction()} 
      </div>
    )
  }
}
export default Track;