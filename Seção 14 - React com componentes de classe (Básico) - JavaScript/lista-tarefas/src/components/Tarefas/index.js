import React from 'react'
import './Tarefas.css'
import PropTypes from 'prop-types'

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => {
        return <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className='edit'
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className='delete'
            />
          </span>
        </li>
      })}
    </ul>
  )
}

Tarefas.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
}
