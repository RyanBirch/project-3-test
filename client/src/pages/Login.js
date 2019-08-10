import React from 'react'
import LoginForm from '../components/LoginForm'
import API from '../utils/API'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    redirect: false
  }

  handleSubmit = event => {
    event.preventDefault()

    let {  email, password } = this.state
    API.login(email, password)
      .then(res => {
        console.log(res)
        localStorage['token'] = res.data.token
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {

    if (this.state.redirect) return <Redirect to="/" />

    return (
      <div>
        <Navbar />
        <LoginForm 
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} 
        />

        <h3 className="text-center">If you don't have an account, you can <Link to="/signup">sign up</Link></h3>
      </div>
    )
  }
}

export default Login