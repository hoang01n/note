import React from 'react'
import { MdOutlinePushPin } from 'react-icons/md'

import PropTypes from 'prop-types'
import moment from 'moment'
import {MdCreate , MdDelete} from 'react-icons/md'
 const NoteCard = ({title,date,content,tags,isPinned, onEdit, onDelete, onPinNote}) => {
  return (
    <div className='bg-white rounded shadow-md p-4 border hover:shadow-xl transition-all ease-in-out'>
 
             
            <div className='flex items-center justify-between'>
              <div className=''>
                <h6 className='text-sm font-semibold '>{title}</h6>     
                <span className='text-sm text-slate-500'>{moment(date).format("Do MMM YYYY")}</span>
              </div>
            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-blue-600' : 'text-slate-300'}`} onClick={onPinNote}/>
        </div>
        <p>
            <span className='text-sm text-slate-60 mt-2'>{content?content.substring(0,100):''}</span>
        </p>
        <div className='flex items-center justify-between mt2'>

        <div className="text-xs text-slate-500">{tags.map((item)=>`#${item} `)}</div>
        <div className='flex items-center gap-2'>
            <MdCreate className='icon-btn hover:text-green-600' onClick={onEdit}/>
            <MdDelete className='icon-btn hover:text-red-600' onClick={onDelete}/>
        </div>
        </div>
    </div>
  )
}
NoteCard.propTypes = {
    content: PropTypes.string
  }
export default NoteCard;