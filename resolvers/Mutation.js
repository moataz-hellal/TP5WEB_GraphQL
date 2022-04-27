import { db } from '../data/db.js';
import { v4 } from 'uuid';

export const Mutation = {
  deleteTodo: (parent, { id }, { pubsub }) => {
    const indexTodo = db.todos.findIndex(todo => todo.id === id);
    const [todo] = db.todos.splice(indexTodo, 1);
    pubsub.publish('todo', { todo: { todo, mutation: 'DELETE' } });
    return todo;
  },
  addTodo: (parent, { addTodoInput }, { pubsub }) => {
    if (!exist(db.users, 'id', addTodoInput.userId)) {
      console.log('inexistant user');
      const newTodo = {
        id: v4(),
        status: 'WAITING',
        ...addTodoInput,
      };
      db.todos.push(newTodo);
      pubsub.publish('todo', { todo: { todo: newTodo, mutation: 'ADD' } });
      return newTodo;
    }
  },
  updateTodo: (parent, { id, updateTodoInput }, { pubsub }) => {
    if (
      updateTodoInput.userId &&
      !exist(db.users, 'id', updateTodoInput.userId)
    ) {
      console.log('inexistant user');
    } else {
      const todoToUpdate = db.todos.find(todoItem => todoItem.id === id);
      if (!todoToUpdate) {
        console.log('inexistant todo');
      } else {
        for (let key in updateTodoInput) {
          todo[key] = updateTodoInput[key];
        }
        pubsub.publish('todo', { todo: { todo, mutation: 'UPDATE' } });
        return todo;
      }
    }
  },
};

function exist(array, attribut, value) {
  console.log(array, attribut, value);
  return array.some(element => element[attribut] == value);
}
