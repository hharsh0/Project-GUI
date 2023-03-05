
import Canvas from "@/components/Canvas"
import Selector from "@/components/Selector"
import { useState } from "react"
import { HamburgerIcon } from "@/components/Icons";
import ConfigBar from "@/components/ConfigBar";

export default function Home() {
  const [tool, setTool] = useState("pencil");
  const [strokeColor, setStrokeColor] = useState("white");
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [fillColor, setFillColor] = useState("#121212");
  const [isConfigBarOpen, setIsConfigBarOpen] = useState(true);
  const [edge, setEdge] = useState("sharp");

  return (
    <div className='h-100vh w-100vw'>
      <div className="absolute top-0 left-0">
        <button onClick={()=> setIsConfigBarOpen(!isConfigBarOpen)} className="hover:bg-[#3D3D3D] relative ring-inset p-4 rounded-lg bg-[#262627] my-4 ml-2 active:ring-2 active:ring-[#BDB9FE]">
          <HamburgerIcon />
        </button>
        {isConfigBarOpen && <ConfigBar
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          fillColor={fillColor}
          setStrokeColor={setStrokeColor}
          setStrokeWidth={setStrokeWidth}
          setFillColor={setFillColor}
          edge={edge}
          setEdge={setEdge}
        />}
      </div>

      <Selector tool={tool} setTool={setTool} />
      <Canvas
        tool={tool}
        setTool={setTool}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        fillColor={fillColor}
      />
    </div>
  );
}
