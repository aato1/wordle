'use client';
import { useState } from "react";
// import { useEffect } from "react";

let testword = "react";

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
  
  return (
    <div className = "grid grid-cols-5 gap-1 justify-center">
      
      <Gamesquare />
      <Gamesquare />
      <Gamesquare />
      <Gamesquare />
      <Gamesquare />
    </div>
  );
}

function Gamesquare() {
  /*
  let [letter, setLetter] = useState("");
  
  function handleKeyDown(e: React.KeyboardEvent<HTMLParagraphElement>) {
    console.log("click!")
    setLetter(letter = e.key);
  }
  */

  return (
    <div className="w-16 h-16 border-solid border-1 border-black grid place-items-center focus:border-blue gameSquare" /*tabIndex={0}  onKeyDown={handleKeyDown}*/>
      <p className="w-8 text-center">{/*letter*/}</p>
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //       console.log("Input value: " + inputValue);
  //     }, [inputValue]);



  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    let newValue = e.target.value;

    for (let i = 0; i < newValue.length; i++) {
      if (!/^[a-zA-Z]$/.test(newValue.charAt(i))) {
        console.log("Invalid input: " + newValue.charAt(i));
        newValue = newValue.slice(0, i) + newValue.slice(i + 1);
      }
    }


    setInputValue(newValue);
    console.log("Input value: " + newValue);
    document.getElementById("input-label")!.innerText = "Input: " + newValue;
    /*if(inputValue.length == 0) {
      console.log("Input is empty");
    }*/
    /*
    for (let i = 0; i < newValue.length; i++) {
      (document.querySelector(".gameSquare p:nth-of-type(" + (i + 1) + ")") as HTMLParagraphElement).innerText = newValue.charAt(i);
    }*/
    document.querySelectorAll(".gameSquare p").forEach((p, index) => {
      p.textContent = newValue.charAt(index) || "";
    });
  };



  
    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log("Submitted: " + inputValue);
      // document.getElementById("input-label")!.innerText = "Input: ";
      // setInputValue("");
      // document.querySelectorAll(".gameSquare p").forEach((p) => {
      //   p.textContent = "";
      // });

      document.querySelectorAll(".gameSquare").forEach((div, index) => {
        if ((div.querySelector("p") as HTMLParagraphElement).textContent === testword.charAt(index)) {
          div.classList.remove("bg-yellow-400");
          div.classList.remove("absent");
          div.classList.add("bg-green-400");
        }
        else if (testword.includes((div.querySelector("p") as HTMLParagraphElement).textContent) && (div.querySelector("p") as HTMLParagraphElement).textContent !== "") {
          
          div.classList.remove("bg-green-400");
          div.classList.remove("absent");
          div.classList.add("bg-yellow-400");
        }
        else {
          div.classList.remove("bg-yellow-400");
          div.classList.remove("bg-green-400");
          div.classList.add("absent");
        }
      });


    
  /*
  function checkLetter(e: React.KeyboardEvent<HTMLInputElement>) {
      if (!/^[a-zA-Z]$/.test(e.key)) {
      console.log("Invalid input: " + e.key);
      handleChange({ target: { value: inputValue } } as React.ChangeEvent<HTMLInputElement>);
    }
  */

  }
  return (
    <form className = "absolute top:-10000 left:-10000"  onSubmit={handleSubmit}>
      <p id = "input-label">Input:</p>
      <input type="text" className = "border border-black border-solid border-1" autoFocus maxLength ={5} onChange={handleChange} id = "userGuess" value={inputValue} />
      <input type="submit" className = "border border-black border-solid border-1" value = "Submit" />
    </form>
  )
}