import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name] : target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, description } = this.state;
    const randomNum  = Math.ceil(Math.random() * 10000);
    const userData = {
        name,
        email,
        description,
        id: randomNum,
        role: "Member",
        photoUrl: "https://talkjs.com/docs/img/ronald.jpg"
    };

    localStorage.setItem("currentTalkjsUser", JSON.stringify(userData));
    this.props.history.push("/chats");
  }

  render() {
    return (
      <div className="login">
        <div className="login__form">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Ваше имя"
              className="login__form__input" 
              required
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
              className="login__form__input"
              required
            />
            <textarea type="text"
              name="description"
              onChange={this.handleChange}
              placeholder="Немного о себе"
              className="login__form__textarea">
            </textarea>
            <input type="submit"
              className="login__form__button" 
              placeholder="Подтвердить"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
