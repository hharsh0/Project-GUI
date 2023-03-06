import {useRef,useEffect,useState} from "react"

function Canvas({tool, strokeColor, strokeWidth, fillColor}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const [endPos, setEndPos] = useState(null);

  // Load canvas data from localStorage when component mounts
//   useEffect(() => {
//     const canvasData = localStorage.getItem("canvasData");
//     if (canvasData) {
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");
//       const img = new Image();
//       img.onload = () => {
//         context.drawImage(img, 0, 0);
//       };
//       img.src = canvasData;
//       contextRef.current = context;
//     }
//   }, []);

  const startDrawing = (event) => {
    setStartPos({ x: event.clientX, y: event.clientY });
    setEndPos({ x: event.clientX, y: event.clientY });
    if (tool === "pencil" || tool === 'eraser') {
      contextRef.current.beginPath();
      contextRef.current.moveTo(
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY
      );
    }
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) {
      return;
    }
    if (tool === "pencil" || tool === 'eraser') {
      contextRef.current.lineTo(
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY
      );
      contextRef.current.stroke();
    }
    setEndPos({ x: event.clientX, y: event.clientY });
  };

  const finishDrawing = () => {
    if (tool === "pencil" || tool === 'eraser') {
      contextRef.current.closePath();
    } else if (tool === "rect") {
      const x = Math.min(startPos.x, endPos.x);
      const y = Math.min(startPos.y, endPos.y);
      const width = Math.abs(startPos.x - endPos.x);
      const height = Math.abs(startPos.y - endPos.y);
      contextRef.current.fillRect(x, y, width, height);
      contextRef.current.strokeRect(x, y, width, height);
    } else if (tool === "pointer") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(startPos.x, startPos.y);
      contextRef.current.lineTo(endPos.x, endPos.y);
      contextRef.current.stroke();
    }
    setIsDrawing(false);

    // Save canvas data to localStorage after each drawing operation
    // localStorage.setItem("canvasData", canvasRef.current.toDataURL());
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.fillStyle = "#121212";
    context.lineWidth = 1;
    contextRef.current = context;
  }, []);

  useEffect(() => {
    contextRef.current.strokeStyle = strokeColor;
    contextRef.current.fillStyle = fillColor;
    contextRef.current.lineWidth = strokeWidth;

    if(tool === 'eraser'){
      contextRef.current.lineWidth = strokeWidth*5;
      contextRef.current.globalCompositeOperation ='destination-out'
    } else {
      contextRef.current.lineWidth = strokeWidth;
      contextRef.current.globalCompositeOperation ='source-over'
    }
  }, [strokeColor, strokeWidth, fillColor,tool]);

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

export default Canvas