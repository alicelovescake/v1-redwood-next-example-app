
import { db } from 'src/lib/db'

export const todos = () => {
  return db.todo.findMany()
}

export const todoCount = () => {
  return context.currentUser
}

export const createTodo = ({ body }) => {
  return db.todo.create({
    data: { body },
  })
}

export const updateTodoStatus = ({ id, status }) =>
  db.todo.update({
    data: { status },
    where: { id },
  })

export const renameTodo = ({ id, body }) =>
  db.todo.update({
    data: { body },
    where: { id },
  })
