'use client'
import { useEffect, useState } from "react";
import {Button, Wrapper, TrafficBoard, LargeHBox, SmallHBox, SmallVBox, LargeVBox, TrafficWrapper, Signal} from '../styles'
import Traffic from "@/components/TrafficWrapper";
import { startTrafficCycle } from "@/hooks/startTraffic";
import { resetLight } from "@/hooks/resetLight";


export default function Home() {
  // Light state for Street A and Street B
  const [lightA, setLightA] = useState<'' | 'green' | 'red' | 'yellow'>("green");
  const [lightB, setLightB] = useState<'' | 'green' | 'red' | 'yellow'>("red");
  const [running, setRunning] = useState(false); // Track whether the system is running
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);  // To clear timeouts during reset

  // Timing constants
  const ONE_CYCLE = 10000; // 10 seconds in milliseconds
  const HALF_CYCLE = 5000; // 5 seconds in milliseconds


  useEffect(() => {
    if (running) {
      startTrafficCycle({setLightA, setLightB, HALF_CYCLE, ONE_CYCLE, setTimerId});
    }

    // Cleanup on component unmount or reset
    return () => {
      if (timerId) {
        clearTimeout(timerId); // Clear all timeouts
      }
    };
  }, [running]);

  // Reset button handler
  const handleReset = () => {
    resetLight({setLightA, setLightB, setRunning, timerId}); // Reset the lights to the initial state
  };

  // Start button handler
   const handleStart = () => {
    if (!running) {
      setRunning(true); // Start the system
    }
  };

  return (
    <Wrapper >
      <TrafficBoard>
            <LargeHBox>
                <LargeVBox></LargeVBox>
                {/* street A */}
                <SmallVBox>
                      <Traffic light={lightA}/>
                </SmallVBox>
                <LargeVBox></LargeVBox>
            </LargeHBox>

            <SmallHBox>
                <LargeHBox $inputColor="#2d2c2b" $justifyContent='center' $alignItems="center" >
                        <Traffic light='yellow'/>
                </LargeHBox>

                {/* Action Buttons */}
                <SmallHBox $flexDirection='column'>
                      <Button onClick={handleStart}>Start</Button>
                      <Button onClick={handleReset}>Reset</Button>
                </SmallHBox>

                {/* Street B */}
                <LargeHBox $inputColor="#2d2c2b"  $justifyContent='center' $alignItems="center" >
                      <Traffic light={lightB}/>
                </LargeHBox>
            </SmallHBox>

            <LargeHBox>
                <LargeVBox></LargeVBox>
                <SmallVBox>
                    <Traffic light='green'/>
                </SmallVBox>
                <LargeVBox></LargeVBox>
            </LargeHBox>
      </TrafficBoard>
    </Wrapper>
  );
}


