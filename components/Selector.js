import React from 'react'
import { HandIcon, PencilIcon, PointerIcon,RectIcon, TextIcon,ImageIcon,EraseIcon } from './Icons';

function Selector() {
  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 my-4 bg-[#262627] rounded-lg">
        <div className="flex gap-x-4 p-2">
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <HandIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <PointerIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <RectIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <PencilIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <TextIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <ImageIcon />
          </div>
          <div className="cursor-pointer hover:bg-[#3D3D3D] p-2 rounded-lg">
            <EraseIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector