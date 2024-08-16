export type TTableResponse<T> = {
  result: T[];
  totalPage: number;
  isEmpty: boolean;
  currentPage: number;
};
