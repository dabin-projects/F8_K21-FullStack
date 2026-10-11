export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';