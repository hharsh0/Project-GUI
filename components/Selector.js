import React from 'react'
import { HandIcon, PencilIcon, PointerIcon,RectIcon, TextIcon,ImageIcon,EraseIcon } from './Icons';

function Selector({tool, setTool}) {
  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 my-4 bg-[#262627] rounded-lg">
        <div className="flex gap-x-4 p-2">
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              tool === "hand"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            }`}
            onClick={() => setTool("hand")}
          >
            <HandIcon />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              tool === "pointer"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            }`}
            onClick={() => setTool("pointer")}
          >
            <PointerIcon />
          </div>
          <div
            className={`${
              tool === "rect"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            } cursor-pointer p-2 rounded-lg`}
            onClick={() => setTool("rect")}
          >
            <RectIcon />
          </div>
          <div
            className={`${
              tool === "pencil"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            } cursor-pointer  p-2 rounded-lg`}
            onClick={() => setTool("pencil")}
          >
            <PencilIcon />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              tool === "text"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            }`}
            onClick={() => setTool("text")}
          >
            <TextIcon />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              tool === "image"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            }`}
            onClick={() => setTool("image")}
          >
            <ImageIcon />
          </div>
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              tool === "eraser"
                ? "bg-[#4F4D6F] text-[#9D9AE1]"
                : "hover:bg-[#3D3D3D]"
            }`}
            onClick={() => setTool("eraser")}
          >
            <EraseIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector