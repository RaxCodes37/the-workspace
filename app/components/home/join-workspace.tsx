import React from 'react'

export default function JoinWorkspaceComponent() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Join a Workspace</h2>

      <form action="" className="flex gap-2">
        <input type="text" placeholder="Invitation code" className="border border-[#3d3d3d] bg-[#272525] py-1 px-2 rounded-md outline-0 w-[80%]"/>
        <button className="border border-[#3d3d3d] bg-[#272525] duration-400 hover:bg-[#2f2d2d] px-2 rounded-md font-semibold">Join</button>
      </form>
    </div>
  )
}
