import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user';
import '../css/body.css';
import {showMessage} from '../util/javascript.js';

class Body extends Component {
    
    render() {

        // let usersList = this.props.usersList;

        // console.log('BODY COMPONENT');
        // console.log(usersList);

        return (
            <div className='body'>
                
                <div className='container'>  
                    <div className="row">
                        <div className="column">
                        <center>
                            <form>
                               <b> Name </b> <input type="text" placeholder="Enter Name" id="message1"></input>
                        </form>

                        <br></br>

                        <form>
                              <b>  Age </b> <input type="text" placeholder="Enter age" id="message2"></input>
                            </form>
                            <br></br>

                            <form>
                            <div className="radio">

                           <b> Gender </b>
                           
                  <input type="radio" name="browser" value="Gender" id="m1" />Male
					<input type="radio" name="browser" value="Gender" id="f1" checked />Female<br />
               
                            </div>
                            </form>

                            <button type="button" onClick= {showMessage} value="Submit">Submit</button>
                            <br></br>
                            
                        </center>
                        
                        </div>
                        <div className="column">
             <center>
             <h2>Print:</h2>
             Name:<span id = "display_message1"></span> <br></br>
             Age: <span id = "display_message2"></span> <br></br>
             Gender: <span id = "display_f1"></span>
             </center>
             
                 </div>

            </div>  
     </div>
                    
 </div>
           
           
        );
    }
}

// Body.propTypes = {
//     usersList: PropTypes.array
// }

export default Body;