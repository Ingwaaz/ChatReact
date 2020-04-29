import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Main from './components/main/main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: 'Andrey',
      },
      messages: [
        {
          sender: 'Анатолий',
          content: 'Всем привет',
          time: '13:44',
          idMessage: 1,
        },
        {
          sender: 'Геннадий',
          content: 'привет',
          time: '13:44',
          idMessage: 2,
        },
        {
          sender: 'Анатолий',
          content: 'Как дела?',
          time: '13:45',
          idMessage: 3,
        },
        {
          sender: 'Мария',
          content: `Таким образом, ежиком может считаться небольшое четвероногое одноголовое животное, 
          покрытое тем, что трудно взять в руки. Но поскольку этот набор признаков не всегда позволяет отличить ежика, например
          , от свиньи, жабы или от обкакавшегося теленка, то такую классификацию мы, ученые, отвергаем. При ближайшем рассмотрении
           в толстых рукавицах ежик предстает перед исследователем в виде круглого, непонятночемпитающего существа.`,
          time: '13:45',
          idMessage: 4,
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Main messages={this.state.messages} />
      </div>
    )
  }
}

export default App;
