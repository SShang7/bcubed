import React from "react";
import firebase from '../../firebase'
import './TickerImage'

export default function TickerImage() {

    class HelloMessage extends React.Component {
        constructor (props) {
          super(props)
          this.state = {
            ticker: 'image',
            image: ''
          }
      
          //this.getImage('NVDA')
        }
      componentDidMount() {
        firebase.storage().ref('image.png').getDownloadURL().then((url) => {
          console.log(url)  
          console.log(this.state.ticker)  
          this.state['image'] = url
          this.setState({image: url})
        });
      }
        /*getImage (image) {
            firebase.storage().ref('GOOGL.png').getDownloadURL().then((url) => {
            console.log(url)  
            console.log(this.state.ticker)  
            this.state[image] = url
            this.setState(this.state)
          });
        }*/
      
        render() {
          return (
            <div className="image">
              here's the trends!<br />
              <img src={ this.state.image } alt="ticker" />
            </div>
          );
        }
      }
      return (
        <HelloMessage>
  
        </HelloMessage>
      )
  }
  
