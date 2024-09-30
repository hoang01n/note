import React, { useState } from 'react'
import { MdAdd ,MdClose} from 'react-icons/md'
const TagInput = ({tags,setTags}) => {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleAddTag = () => {
        if(inputValue.trim() !== ''){
            setTags([...tags,inputValue])
            setInputValue('')
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            handleAddTag()
        }
    }
    const handleRemoveTag = (index) => {
        const newTags = tags.filter((index) => index !== index)
        setTags(newTags)
    }
  return (
    <div>
        {tags?.length > 0 && (
        <div className='flex flex-wrap gap-4 mt-3'>
            {tags?.map((tag,index) => (
                <span key={index} className=' flex items-center gap-2 text-sm text-slate-700 bg-blue-100 border border-slate-200 px-3 py-2 rounded'>
                    # {tag}
                    <button className='text-2xl text-slate-700 cursor-pointer' onClick={() => handleRemoveTag(index)}>
                        <MdClose size={15}/>
                    </button>
                </span>
            ))}
        </div>
        )}
    
    <div className='flex flex-wrap gap-4 mt-3'>
        <input value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} type="text" placeholder='Add Tags' className=' text-sm bg-transparent border px-3 py-2 rounded outline-none text-slate-700 bg-slate-100 border border-slate-200  focus:border-blue-500' />
        <button onClick={handleAddTag} className='w-8 h-8 flex items-center justify-center border border-blue-700 rounded hover:bg-blue-500'>
            
            <MdAdd className='text-2xl text-blue-700 hover:text-white'/>
        </button>
    </div>
    </div>
  )
}

export default TagInput