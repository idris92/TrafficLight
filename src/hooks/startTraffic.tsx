
type InputProps = {
    setLightA: React.Dispatch<React.SetStateAction<"" | "red" | "yellow" | "green">>;
    setLightB: React.Dispatch<React.SetStateAction<"" | "red" | "yellow" | "green">>;
    HALF_CYCLE: number;
    ONE_CYCLE: number;
    setTimerId: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>

  };

export const startTrafficCycle = ({setLightA, setLightB, HALF_CYCLE, ONE_CYCLE, setTimerId}:InputProps) => {
 
    // Function to switch the lights based on timing
    const switchLights = () => {
     // Street A Green, Street B Red for ONE_CYCLE (10 seconds)
     setLightA("green");
     setLightB("red");

     // After ONE_CYCLE
     const cycle1 = setTimeout(() => {
       // Both Street A and B turn Yellow for HALF_CYCLE (5 seconds)
       setLightA("yellow");
       setLightB("yellow");

       // After HALF_CYCLE
       const cycle2 = setTimeout(() => {
         // Street A Red, Street B Green for ONE_CYCLE (10 seconds)
         setLightA("red");
         setLightB("green");

         // After ONE_CYCLE, both turn Yellow for HALF_CYCLE before switching back
         const cycle3 = setTimeout(() => {
           // Both Street A and Street B Yellow for HALF_CYCLE
           setLightA("yellow");
           setLightB("yellow");

           const cycle4 = setTimeout(() => {
             switchLights(); // Recursively call to create the loop
           }, HALF_CYCLE);

           setTimerId(cycle4); // Save the timer ID for later cleanup

         }, ONE_CYCLE);

         setTimerId(cycle3); // Save the timer ID for later cleanup

       }, HALF_CYCLE);

       setTimerId(cycle2); // Save the timer ID for later cleanup

     }, ONE_CYCLE);

     setTimerId(cycle1); // Save the timer ID for later cleanup
   };

   switchLights(); // Start the light cycle
 };
