import React, { Component } from 'react'
import {Redirect ,Link,BrowserRouter} from 'react-router-dom';

import axios from 'axios';

class IndexContent extends Component {

     constructor(props) {
         super(props)
        this.onChangeUserUserName = this.onChangeUserUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

         this.state = {
             sign: false,
             UserName: '',
            email: '',
            password:'',
            isSignedUp: false 
              
         }
     }
     onChangeUserUserName(e) {
        this.setState({ UserName: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.UserName,
            email: this.state.email,
            email: this.state.password,
            
            
        };

        axios.post('http://localhost:4000/users/create', userObject , this.setState({ isSignedUp: true }))
            .then((res) => {
                console.log(res.data);
               
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ UserName: '', email: '', password:'' });
       

        
        
    }
      render() {
          const {  sign } = this.state;
            if (this.state.isSignedUp) {
              return <Redirect to = {{ pathname: "/App2" }} />;
            }
    return (<section id="home" class="main">
    <div class="overlay"></div>
   <div class="container">
       <div class="row">

              <div class="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" >
                    <img src="https://images-na.ssl-images-amazon.com/images/I/31dNhl27s%2BL._SX311_BO1,204,203,200_.jpg"   
                     class="img-responsive" alt="Home"
                     />
              </div>

              <div class="col-md-6 col-sm-7 col-xs-12"  >
                   <div class="home-thumb">
                   <h2>Get Started and Create Your Account</h2>
                   <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter UserName</label>
                        <input type="text" value={this.state.UserName} onChange={this.onChangeUserUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Password</label>
                        <input type="password" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                    
                    <button className="wow fadeInUp section-btn btn btn-success smoothScroll" id="signup" value="Create User">SignUp</button>
                    
                    </div>
                </form>
                </div>
            </div>
            
              </div>
               </div>
       </div>
     </section>
     
);

}
}



export default IndexContent

    
