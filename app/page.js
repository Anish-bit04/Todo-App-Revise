"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [data, setdata] = useState([])

  function submitHandler(e) {
    e.preventDefault(); 
    setdata([...data,{title,desc}])
    settitle("")
    setdesc("")
  }
  function deleteHandler(i){
    let copyTask = [...data]
    copyTask.splice(i,1)
    setdata(copyTask)
  }

  let renderTask = "No Task Available"
  if(data.length>0){
   renderTask= data.map((t,i)=>{
      return <div className="">
        <ul className=" flex items-center justify-between gap-3 p-2" key={i}>
        <li className="text-2xl font-semibold p-2">{t.title}</li>
        <li className="text-xl p-2 ">{t.desc}</li>
        <button className="bg-red-400 text-xl rounded-2xl p-2 " onClick={()=>{deleteHandler(i)}}>Delete</button>
      </ul>
      </div> 
    })
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center m-20 ">
        <h1 className="text-3xl mb-5">My Todo List</h1>
        <form className="flex flex-col w-[500px]" onSubmit={submitHandler}>
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
            className="h-19 w-19 bg-slate-400 border-black rounded-xl text-2xl m-5 p-2 placeholder-slate-800 text-center"
            placeholder="Enter Task Title"
          />
          <input
            onChange={(e) => setdesc(e.target.value)}
            value={desc}
            className="h-19 w-19 bg-slate-400 border-black rounded-xl text-2xl m-5 p-2 placeholder-slate-800 text-center"
            placeholder="Enter Task Description"
          />
          <button type="submit" className=" w-[90px] m-auto bg-red-500 text-white text-2xl p-2 mt-3 rounded-xl">
            Add
          </button>
        </form>
        <div className="bg-blue-300 text-2xl h-full w-[400px] mt-5 rounded-xl text-center ">
          {renderTask}

        
        </div>
      </div>
    </>
  );
};

export default page;
