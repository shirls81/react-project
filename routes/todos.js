'use strict';

import express from 'express';
import Todo from '../lib/todos'

const { Router } = express;
const todosRouter = new Router();

todosRouter.get('/', (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) return next(err)
    res.json(todos)
  })
})

todosRouter.post('/', (req, res, next) => {
  Todo.create(req.body, (err, todo) => {
    if (err) return next(err)
    res.status(201).json(todo)
  })
})

todosRouter.get('/:id', (req, res, next) => {
  Todo.findOne(req.params.id, (err, todo) => {
    if (err) return next(err)
    if (!todo) return res.sendStatus(404)
    res.json(todo)
  })
})

todosRouter.put('/:id', (req, res, next) => {
  Todo.delete(req.params.id, (err) => {
    if (err) return next(err)
    res.sendStatus(204)
  })
})
export default todosRouter;
