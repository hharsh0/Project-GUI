import React,{useEffect} from 'react'
import { StrokeWidthA, StrokeWidthB, StrokeWidthC,EdgeNormal, EdgeRound } from "./Icons";

function ConfigBar({ strokeColor, strokeWidth, fillColor, setStrokeColor, setStrokeWidth, setFillColor, edge, setEdge }) {
    console.log(strokeColor)
    const divStyleStroke = {}
    const divStyleFillColor = {}
    if (strokeColor) {
        divStyleStroke.backgroundColor = strokeColor
    }
    if (!strokeColor) {
        divStyleStroke.backgroundColor = "white";
    }
    if (fillColor) { 
        divStyleFillColor.backgroundColor = fillColor
    }
    if (!fillColor) {
        divStyleFillColor.backgroundColor = "white"
    }
  return (
    <>
      <div className="bg-[#262627] relative ml-2 text-[#B2B2B2] text-sm w-64 rounded-lg p-4">
        <div>
          <p>Stroke</p>
          <div className="my-2 flex items-center">
            <div style={divStyleStroke} className={`h-7 w-7 rounded-md `}></div>
            <div className="ring-inset rounded-md ml-4">
              <input
                className="bg-[#262627] ring-1 ring-[#3D3D3D] h-7 rounded-md outline-none p-2"
                placeholder="#000000"
                onChange={(event) => {
                  setStrokeColor(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <p>Background</p>
          <div className="my-2 flex items-center">
            <div style={divStyleFillColor} className="h-7 w-7 rounded-md"></div>
            <div className="ring-inset rounded-md ml-4">
              <input
                className="bg-[#262627] ring-1 ring-[#3D3D3D] h-7 rounded-md outline-none p-2"
                onChange={(event) => {
                  setFillColor(event.target.value);
                }}
                placeholder="#000000"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <p>Stroke width</p>
          <div className="flex gap-x-2 my-1">
            <div
              onClick={() => setStrokeWidth(1)}
              className={`${
                strokeWidth === 1
                  ? "bg-[#4F4D6F] text-[#9D9AE1]"
                  : "hover:bg-[#3D3D3D]"
              } h-7 w-7 rounded-md ring-1 ring-[#3D3D3D] flex justify-center items-center hover:bg-[#3D3D3D]`}
            >
              <StrokeWidthA />
            </div>
            <div
              onClick={() => setStrokeWidth(5)}
              className={`${
                strokeWidth === 5
                  ? "bg-[#4F4D6F] text-[#9D9AE1]"
                  : "hover:bg-[#3D3D3D]"
              } h-7 w-7 rounded-md ring-1 ring-[#3D3D3D] flex justify-center items-center hover:bg-[#3D3D3D]`}
            >
              <StrokeWidthB />
            </div>
            <div
              onClick={() => setStrokeWidth(10)}
              className={`h-7 w-7 rounded-md ring-1 ring-[#3D3D3D] flex justify-center items-center hover:bg-[#3D3D3D] ${
                strokeWidth === 10
                  ? "bg-[#4F4D6F] text-[#9D9AE1]"
                  : "hover:bg-[#3D3D3D]"
              }`}
            >
              <StrokeWidthC />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Edges</p>
          <div className="flex gap-x-2 my-1">
            <div
            onClick={() => setEdge("sharp")}
              className={`${
                edge === "sharp"
                  ? "bg-[#4F4D6F] text-[#9D9AE1]"
                  : "hover:bg-[#3D3D3D]"
              } h-7 w-7 rounded-md ring-1 ring-[#3D3D3D] flex justify-center items-center`}
            >
              <EdgeNormal />
            </div>
            <div
            onClick={() => setEdge("round")}
              className={`${
                edge === "round"
                  ? "bg-[#4F4D6F] text-[#9D9AE1]"
                  : "hover:bg-[#3D3D3D]"
              } h-7 w-7 rounded-md ring-1 ring-[#3D3D3D] flex justify-center items-center hover:bg-[#3D3D3D]`}
            >
              <EdgeRound />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfigBar