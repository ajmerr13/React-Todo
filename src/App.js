import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const data = [
  {
    name: "Feed Dog",
    id: 1,
    finished: false
  },
  {
    name: "Wash Dishes",
    id: 2,
    finished: false
  },
  {
    name: "Do Laundry",
    id: 3,
    finished: false
  },
  {
    name: "Make The Bed",
    id: 4,
    finished: false
  },
  {
    name: "Buy Groceries",
    id: 5,
    finished: false
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chores: data
    }
    this.toggleFinished = this.toggleFinished.bind(this);
  }

  toggleFinished(choreId) {
    console.log('toggleFinished', choreId);

    this.setState({
      chores: this.state.chores.map(chore => {
        if(chore.id === choreId){
          return {
            ...chore,
            finished: !chore.finished
          };
        }
        return chore;
      })
    })
  }

  clearChore = () => {
    console.log('clearchore');
    this.setState({
      chores: this.state.chores.filter(chore => {
        return !chore.finished;
      })
    })
  }

  addChore = (choreName) => {
    console.log('addChore: ', choreName);
    this.setState({
      chores: [
        ...this.state.chores,
        {
          name: choreName,
          id: Date.now(),
          finished: false
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addChore={this.addChore} />
        <TodoList 
         chores={this.state.chores}
         toggleFinished={this.toggleFinished}
         clearChore={this.clearChore}
         />
      </div>
    );
  }
}

export default App;
