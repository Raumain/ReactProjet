import { Outlet } from "react-router-dom";

export default function App() {
console.log("( ___ )----------------------------------( ___ )")
 console.log(" |   |%c                                    %c|   | ", "background: white;", "background: auto;font-family: monospace;")
 console.log(" |   |%c  ________ ________     ___    ___  %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c |\\   ____\\\\_____  \\   |\\  \\  /  /| %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c \\ \\  \\___\\|____|\\ /_  \\ \\  \\/  / / %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c  \\ \\  \\        \\|\\  \\  \\ \\    / /  %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c   \\ \\  \\____  __\\_\\  \\  /     \\/   %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c    \\ \\_______\\\\_______\\/  /\\   \\   %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c     \\|_______\\|_______/__/ /\\ __\\  %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |   |%c                       |__|/ \\|__|  %c|   | ", "background: white;color:red;", "background: auto;font-family: monospace;")
 console.log(" |___|%c                                    %c|___| ", "background: white;", "background: auto;font-family: monospace;")
  console.log("(_____)----------------------------------(_____)")


  console.log(
    "%cC3X",
    "font-size: 2rem; color: red; background:yellow; font-family: system-ui; font-weight: bold; padding: 0.5rem 1rem; border-radius: 0.5rem; box-shadow: 2px 2px 3rem blue;"
  );
  return (
    <div className="p-6 w-screen h-screen">
      <Outlet />
    </div>
  );
}
