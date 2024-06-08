"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Ergeon Frontend App</code>
        </p>
      </div>

      <div className="mt-8">
        <button
          className="w-[200px] rounded-md h-[50px] font-bold bg-blue-500 hover:bg-blue-400 text-white"
          onClick={handleCounter}
        >
          Click count: {counter}
        </button>
      </div>
    </main>
  );
}
