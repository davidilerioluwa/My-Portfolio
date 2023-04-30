import { useState,useRef,Suspense } from "react"
import {Canvas,useFrame} from "@react-three/fiber"
import {Points,PointMaterial,Preload} from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"


const Stars = (props) => {
  const ref=useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(999), { radius: 1.2 }));
  useFrame((state,delta)=>{
    ref.current.rotation.y +=delta/10
    ref.current.rotation.x +=delta/10
  })

  return (
   <group rotation={[0,0,Math.PI/4]}>
    <Points ref={ref} positions={sphere} >
      <PointMaterial size={0.004}/>
    </Points>
   </group>
  )
}

const StarsCanvas=()=>{
  return(
    <div className=" absolute inset-0 z-[-1]">
    <Canvas  camera={{position:[0,0,1]  }} >
      <Suspense fallback={null}>
        <Stars/>
      </Suspense>
    </Canvas>
  </div>
  )
}

export default StarsCanvas
