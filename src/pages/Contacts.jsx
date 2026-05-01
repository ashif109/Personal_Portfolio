import React from 'react'
import { useState } from 'react'
const Contacts = () => {
  const [name, setname] = useState()
    const [mn, setmn] = useState()
    const [email, setemail] = useState()
    const [time, settime] = useState()
    const [soi, setsoi] = useState()
    const [details, setdetails] = useState()
  async function show(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("mn", mn);
  formData.append("email", email);
  formData.append("time", time);
  formData.append("soi", soi);
  formData.append("details", details);

  const response = await fetch("https://formspree.io/f/mjglkygb", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    alert("Message sent successfully 🔥");
  } else {
    alert("Error sending ❌");
  }

}
  return (
    <div className='text-center px-4 py-10'>
      <div className='mx-auto max-w-5xl space-y-6 text-center mb-10'>
        <h2 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>
          Contact Me
        </h2>
        <p className='mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed'>
          Feel free to reach out for project collaborations, questions, feedback, or even just to connect and say hello!
        </p>
        <div className='mx-auto max-w-4xl rounded-[2rem]  p-8 shadow-2xl shadow-black/20 backdrop-blur-xl'>
          <form className='grid gap-6 md:grid-cols-2'>
            <input
              className='w-full rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-4 text-gray-100 placeholder-gray-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
              type='text'
              placeholder='Name'
              onChange={(evt)=>{
                setname(evt.target.value)
              }}
            />
            <input
              className='w-full rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-4 text-gray-100 placeholder-gray-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
              type='text'
              placeholder='Email'
              onChange={(evt)=>{
                setemail(evt.target.value)
              }}
            />
            <input
              className='w-full rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-4 text-gray-100 placeholder-gray-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
              type='text'
              onChange={(evt)=>{
                setmn(evt.target.value)
              }}
              placeholder='Phone Number'
            />
            <input
              className='w-full rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-4 text-gray-100 placeholder-gray-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
              type='text'
              placeholder='Timeline'
              onChange={(evt)=>{
                settime(evt.target.value)
              }}
            />
            <select
  className="w-full h-13 rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-2 text-gray-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
  defaultValue=""
  onChange={(evt)=>{
    setsoi(evt.target.value)
  }}
>
  <option value="" disabled>
    Service of interest
  </option>
  <option value="full-stack">Full-Stack</option>
  <option value="backend">Backend Dev</option>
  <option value="front-dev">Frontend Dev</option>
  <option value="uidev">UI/UX Designer</option>
</select>
            <textarea
              className='w-full rounded-xl border border-gray-700 bg-gray-900/90 px-5 py-4 text-gray-100 placeholder-gray-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20'
              rows='5'
              placeholder='Project Details'
              onChange={(evt)=>{setdetails(evt.target.value)}}
            />
            <div className='md:col-span-2 flex justify-center'>
              <button
                type='button'
                className='rounded-full border-2 border-gray-500 bg-transparent px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700'
                onClick={show}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
