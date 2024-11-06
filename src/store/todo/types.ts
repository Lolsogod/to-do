export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

export interface TodoState {
  items: Todo[];
}

export enum ClearType {
  ACTIVE = "active",
  COMPLETED = "completed",
  DELETED = "deleted",
  ALL = "all",
}

export const clearTypeLabels: Record<ClearType, string> = {
  [ClearType.ACTIVE]: "активные",
  [ClearType.COMPLETED]: "завершённые",
  [ClearType.DELETED]: "корзину",
  [ClearType.ALL]: "все",
};
