import React, { Component } from 'react'
import {Redirect ,Link} from 'react-router-dom';
import axios from 'axios';

class IndexContent extends Component {

     constructor(props) {
         super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

         this.state = {
             sign: false,
             name: '',
            email: '',
            password:'',
         }
     }
     onChangeUserName(e) {
        this.setState({ name: e.target.value })
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
            name: this.state.name,
            email: this.state.email,
            email: this.state.password
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', email: '', password:'' })
        

        
    }
     onOpenModal = () => {
          this.setState({ sign: true });
      };
      onCloseModal = () => {
          this.setState({ sign: false });
      };
      render() {
          const {  sign } = this.state;
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
                        <h1 class="wow fadeInUp"  class="up" >To-Do List.  </h1>
                        <br />
                        <p class="wow fadeInUp">The best way improve your productivity <br/> and achieve your dreams</p>
                   <h2>Get Started and Create Your Account</h2>
                   <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Password</label>
                        <input type="password" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                    <Link to="./App2">
                    <button className="wow fadeInUp section-btn btn btn-success smoothScroll" id="signup" value="Create User">SignUp</button>
                    </Link>
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

    