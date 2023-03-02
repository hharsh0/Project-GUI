import {useRef,useEffect,useState} from "react"

function Canvas() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const finishDrawing = () => {
        contextRef.current.closePath();
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