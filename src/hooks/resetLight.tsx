
type InputProps = {
    setLightA: React.Dispatch<React.SetStateAction<"" | "red" | "yellow" | "green">>;
    setLightB: React.Dispatch<React.SetStateAction<"" | "red" | "yellow" | "green">>;
    setRunning: React.Dispatch<React.SetStateAction<boolean>>;
    timerId: NodeJS.Timeout | null
  };

export const resetLight = ({setLightA, setLightB, setRunning, timerId}:InputProps) => {
    setLightA("green");
    setLightB("red");
    setRunning(false); // Stop the system when reset
    if (timerId) {
      clearTimeout(timerId); // Clear the timer on reset
    }
 };
