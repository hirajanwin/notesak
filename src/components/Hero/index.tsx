import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import Link from '@docusaurus/Link';

export default function Hero(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | undefined>() as React.MutableRefObject<HTMLCanvasElement>;
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 9696,
      mapBrightness: 3,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1.5, 1, 0.5],
      opacity: 0.3,
      markers: [
        // longitude latitude
        { location: [28.4595, 77.0266], size: 0.06 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
        state.width = width * 2;
        state.height = width * 2;
      }
    });


    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div style={{
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'center',
      background: 'linear-gradient(var(--ifm-color-primary-darkest), var(--docusaurus-highlighted-code-line-bg))',
      paddingBlock: '50px',
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '600px', 
        maxHeight: '600px',
        aspectRatio: '1/1', 
        position: 'relative' 
      }}>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%',  }}
          />
      </div>
      <div
        style={{
          textAlign: 'center',
          position: 'absolute',
          alignItems: 'center',
          top: '40%',
          width: '100%',
          transform: 'translateY(-40%)',
        }}
      >
        <h1 style={{
          fontSize: '7vw',
        }}>
          akshat's notes
        </h1>
        <p>Software Engineering and Life concepts</p>
        <Link
            className="button button--secondary button--lg"
            to="/docs/index">
            Get Started
        </Link>
      </div>
    </div>
  );
}
