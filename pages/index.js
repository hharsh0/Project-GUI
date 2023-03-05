
import Canvas from "@/components/Canvas"
import Selector from "@/components/Selector"
import {useState} from "react"

export default function Home() {
  const [tool, setTool] = useState("pencil");

  return (
    <>
      <Selector tool={tool} setTool={setTool} />
      <Canvas tool={tool} setTool={setTool} />
    </>
  );
}
