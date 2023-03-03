import { useRef, useEffect, useState } from "react";

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // console.log("ContextReference",contextRef);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    // contextRef.current.beginPath();
    const x = Math.round(offsetX);
    const y = Math.round(offsetY);
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    //  const { offsetX, offsetY } = nativeEvent;
    // //  contextRef.current.moveTo(offsetX,offsetY);
    // // const x=Math.round(offsetX);
    // const y= Math.round(offsetY);
    //  contextRef.current.lineTo(offsetX, offsetY);
    //  contextRef.current.stroke();
  };

  const finishDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    //  contextRef.current.moveTo(offsetX,offsetY);
    const x = Math.round(offsetX);
    const y = Math.round(offsetY);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // CTX Drawing
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.lineWidth = 5;
    contextRef.current = context;

    // Draw a Circle
    // const circle=canvas.getContext("2d");
    // console.log("Circle",circle);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
      />
    </>
  );
}

export default Canvas;
