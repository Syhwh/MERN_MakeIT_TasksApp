const { Router } = require('express');
const Task = require('../database/models/taskSchema');
const router = Router();

router.get('/', async (req, res) => {

  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)

  } catch (error) {
    res.status(401).json(error)
  }

});

router.post('/task', async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description
  }
  try {
    const task = await Task.create(data)
    res.status(200).json({ message: 'Task created', task })

  } catch (error) {
    res.status(401).json(error)
  }
});

router.delete('/task/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Task.deleteOne({ _id: id })
    res.status(200).json({ message: 'Task deleted' })
  } catch (error) {
    res.status(401).json(error)
  }
})

router.patch('/task/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Task.updateOne({ _id: id }, {
      title: req.body.title,
      description: req.body.description,
      done: false
    })

    res.status(200).json({
      message: 'Task updated',
      task: {
        _id: id,
        title: req.body.title,
        description: req.body.description,
        done: false
      }
    })
  } catch (error) {
    res.status(401).json(error)
  }
})

router.patch('/task/status/:id', async (req, res) => {
  const { id } = req.params;
  const {done}=req.body;
  console.log(done)
  try {
    await Task.updateOne({ _id: id }, {
            done: done
    })
    
    res.status(200).json({
      message: 'Task Status Updated'})
  } catch (error) {
    res.status(401).json(error)
  }
})



module.exports = router