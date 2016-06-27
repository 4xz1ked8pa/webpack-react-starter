let nextTodoId = 0;
// export const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     id: (nextTodoId++).toString(),
//     text
//   }
// }
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: (nextTodoId++).toString(),
  text
});
