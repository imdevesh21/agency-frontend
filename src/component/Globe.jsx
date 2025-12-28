import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export default function EarthGlobe() {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    // Set initial camera view
    globeRef.current.pointOfView({ altitude: 2.2 });

  }, []);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      width={360}
      height={360}
      animateIn={true}
    />
  );
}
