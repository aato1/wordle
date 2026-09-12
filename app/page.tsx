// import Image from "next/image";

'use client';
import { useState } from "react";

export default function Home() {

  return (
    <div>
      <Header />
      <main className = "grid grid-rows-1 justify-center">
        <Gameboard />
        <Input />
      </main>
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    document.getElementById("input-label")!.innerText = "Input: " + e.target.value;
  }

  return (
    <div className = "absolute left:-1">
      <p id = "input-label">Input:</p>
      <input type="text" className = "border border-black border-solid border-1" autoFocus maxLength ={5} value={inputValue} onChange={handleChange} />
    </div>
  )
}
















function Header() {
  return (
    <header className="flex justify-center p-4">
        <h1 className="text-center">Wordle</h1>
    </header>
  );
}

function Gameboard() {
  

  return (
    
    <div className = "grid grid-rows-6 gap-1 w-100">
      <Gamerow />
      <Gamerow />
      <Gamerow />
      <Gamerow />
      <Gamerow />
      <Gamerow />
    </div>
  );
}

function Gamerow() {
  // let letter = "";
  
  return (
    <div className = "grid grid-cols-5 gap-1 justify-center">
      
      <Gamesquare /*letter = {letter} onKeyDown={handleKeyDown}*/ />
      <Gamesquare /*letter = {letter} onKeyDown={handleKeyDown}*/  />
      <Gamesquare /*letter = {letter} onKeyDown={handleKeyDown}*/  />
      <Gamesquare /*letter = {letter} onKeyDown={handleKeyDown}*/  />
      <Gamesquare /*letter = {letter} onKeyDown={handleKeyDown}*/  />
    </div>
  );
}





function Gamesquare(/*{letter, onKeyDown}: {letter: string, onKeyDown?: React.KeyboardEventHandler<HTMLParagraphElement>}*/) {
  let [letter, setLetter] = useState("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLParagraphElement>) {
    console.log("click!")
    
    setLetter(letter = e.key);
    /*
    const nextElement = e.currentTarget.nextElementSibling as HTMLElement | null;
      nextElement?.focus();
    */
  }


  return (
    <div className="w-16 h-16 border-solid border-1 border-black grid place-items-center focus:border-blue" tabIndex={0}  onKeyDown={handleKeyDown}>
      <p className="w-8 text-center">{letter}</p>
    </div>
  );
}


/*
<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
*/