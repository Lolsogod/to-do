import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClearType, Todo, TodoState } from './types';
import { RootState } from '../store';

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        deleted: false,
      };
      state.items.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    softDeleteTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.deleted = true;
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.deleted = false;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    clearTodos: (state, action: PayloadAction<ClearType>) => {
      const type = action.payload;
      
      if (type === ClearType.DELETED) {
        state.items = state.items.filter(todo => !todo.deleted);
        return;
      }
    
      const shouldDelete = (todo: Todo): boolean => {
        if (todo.deleted) return false;

        switch (type) {
          case ClearType.ACTIVE: return !todo.completed;
          case ClearType.COMPLETED: return todo.completed;
          case ClearType.ALL: return true;
          default: return false;
        }
      };
    
      state.items.forEach(todo => {
        if (shouldDelete(todo)) todo.deleted = true;
      });
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  softDeleteTodo,
  restoreTodo,
  clearTodos,
} = todoSlice.actions;
export default todoSlice.reducer;

export const selectAllTodos = (state: RootState) => state.todos.items.filter(todo => !todo.deleted);
export const selectActiveTodos = (state: RootState) => state.todos.items.filter(todo => !todo.completed && !todo.deleted);
export const selectCompletedTodos = (state: RootState) => state.todos.items.filter(todo => todo.completed && !todo.deleted);
export const selectDeletedTodos = (state: RootState) => state.todos.items.filter(todo => todo.deleted);
