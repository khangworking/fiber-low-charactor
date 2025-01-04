import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import Configuration from "./components/Configuration";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <Experience />
      </Canvas>
      <Configuration />
    </>
  );
}

export default App;
