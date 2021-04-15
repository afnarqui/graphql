'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi title',
    teacher: 'Mi profesor',
    description: 'description',
    topic: 'programación'
  },
  {
    _id: 'anyid2',
    title: 'Mi title2',
    teacher: 'Mi profesor2',
    description: 'description2',
    topic: 'programación2'
  },
  {
    _id: 'anyid3',
    title: 'Mi title3',
    teacher: 'Mi profesor3',
    description: 'description3',
    topic: 'programación3'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}
