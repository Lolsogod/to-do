import { ClearType, Todo } from "src/store/todo";

export interface TodoListProps {
    todos: Todo[];
    type: ClearType;
  }