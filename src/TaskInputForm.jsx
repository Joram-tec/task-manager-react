import { useEffect, useState } from 'react';

function TaskInputForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setSubmission] = useState();
  const handleClick = (event, apiUrl) => {
    event.preventDefault();
    useEffect(() => {   
      fetch(apiUrl,{
      method: 'Post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
     }, [])
 

    const newTask = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      title: title,
      description: description,
      completed: false,
    };

    console.log(newTask);
    addTask(newTask);
  };

  return (
    <>
      <form className='task-form'>
        <input
          type='text'
          placeholder='Title'
          className='input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Description'
          className='input textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type='submit'
          className='btn add-btn'
          onClick={handleClick} // option 1
          // onClick={() => handleClick()} // option 2
          // onClick={handleClick()} // this doesn't work
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default TaskInputForm;