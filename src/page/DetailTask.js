import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateTask = () => {

  // state untuk data inputan form
  const [formInput,setFormInput] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "",
    created_at: ""
  });

  // state untuk data inputan form
  const [errors,setErrors] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "",
    created_at: ""
  });

  // Set created_at saat tugas dibuat
  formInput.created_at = new Date().toISOString();

  // function untuk membuat 2 ways binding antara form dengan state
  const handleInputChange = (event) => {
  setFormInput({ ...formInput, [event.target.name]: event.target.value })
  }

  const handleForSubmit = (e) => {
    e.preventDefault();

    let pesanErrors = {};

    //Validasi Nama
    if (formInput.title.trim() === "") {
    pesanErrors.title = "Nama task tidak boleh kosong";
    }
    else {
    pesanErrors.title = "";
    }

    //Validasi Description
    if (formInput.description.trim() === "") {
      pesanErrors.description = "Descripiton tidak boleh kosong";
      }
      else {
      pesanErrors.description = "";
      }

    //Validasi Tanggal
    if (formInput.due_date.trim() === "") {
      pesanErrors.due_date = "Tanggal tidak boleh kosong";
      }
      else {
      pesanErrors.due_date = "";
      }

    //Validasi Status
    if (formInput.status.trim() === "") {
      pesanErrors.status = "Status tidak boleh kosong";
      }
      else {
      pesanErrors.status = "";
      }

      // update error state
      setErrors(pesanErrors);

      // cek apakah seluruh form valid atau masih ada error
      let formValid = true;
      for (let inputName in pesanErrors) {
        if (pesanErrors[inputName].length > 0) {
          formValid = false;
        }
      }
  
      // proses data jika form valid
      if (formValid) {
        console.log(formInput);
      }
  }

  return (
    <>
      <Link to='/'>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 relative top-5 left-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
      </Link>
      <div className="flex justify-center items-center h-screen">
        <div className="container px-20">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Create New Task</h1>
          <form onSubmit={handleForSubmit}>
            <div class="mb-6">
              <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
              <input name='title' onChange={handleInputChange} value={formInput.title} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task name..." />
              {errors.title && <small className='text-red-600'>{errors.title}</small>}
            </div>
            <div class="mb-6">          
              <label htmlFor="deskripsi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea name='description' onChange={handleInputChange} value={formInput.description} id="deskripsi" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>
              {errors.description && <small className='text-red-600'>{errors.description}</small>}
            </div>
            <div class="mb-6">          
              <label htmlFor="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <select name='status' onChange={handleInputChange} value={formInput.status} id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="In Progress" selected>In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.status && <small className='text-red-600'>{errors.status}</small>}
            </div>
            <div class="mb-6">
              <label htmlFor="deskripsi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input 
              name='due_date'
              onChange={handleInputChange}
              value={formInput.due_date}
              type="date" id="datetask" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
              {errors.due_date && <small className='text-red-600'>{errors.due_date}</small>}
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;