import {useRef,useEffect,useState} from "react"

function Canvas({tool, setTool}) {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [startPos, setStartPos] = useState(null);
    const [endPos, setEndPos] = useState(null);

    const startDrawing = (event) => {
        // const { offsetX, offsetY } = nativeEvent;
        // contextRef.current.beginPath();
        // contextRef.current.moveTo(offsetX, offsetY);
        setStartPos({ x: event.clientX, y: event.clientY });
        setEndPos({ x: event.clientX, y: event.clientY });
        setIsDrawing(true);
    }

    const draw = (event) => {
        if (!isDrawing) {
            return;
        }
        // const { offsetX, offsetY } = nativeEvent;
        // contextRef.current.lineTo(offsetX, offsetY);
        // contextRef.current.stroke();
        setEndPos({ x: event.clientX, y: event.clientY });
    }

    const finishDrawing = () => {
        // contextRef.current.closePath();
        if (tool === "pencil") {
          contextRef.current.beginPath();
          contextRef.current.moveTo(startPos.x, startPos.y);
          contextRef.current.lineTo(endPos.x, endPos.y);
          contextRef.current.stroke();
        } else if (tool === "rect") {
          const x = Math.min(startPos.x, endPos.x);
          const y = Math.min(startPos.y, endPos.y);
          const width = Math.abs(startPos.x - endPos.x);
          const height = Math.abs(startPos.y - endPos.y);
          contextRef.current.fillRect(x, y, width, height);
          contextRef.current.strokeRect(x, y, width, height);
        } else if (tool === "line") {
          contextRef.current.beginPath();
          contextRef.current.moveTo(startPos.x, startPos.y);
          contextRef.current.lineTo(endPos.x, endPos.y);
          contextRef.current.stroke();
        }
        setIsDrawing(false);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "white";
        context.fillStyle = "#121212";
        context.lineWidth = 5;
        contextRef.current = context;
    },[])

  return (
      <>
          <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={finishDrawing}
          />
      </>
  )
}

export default Canvas