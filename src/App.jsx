import { useEffect, useState } from "react";
import "./App.css";
import Plan from "./components/Plan";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleItems = () => {
    if (text !== "") {
      setItems([...items, text]);
      setText("");
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="bg-cyan-800 flex flex-col items-center h-screen">
      <div className="mt-[50px] mb-[30px]">
        <h1 className="font-bold text-yellow-50 text-[50px]">Today's Plan</h1>
      </div>
      <div className="flex items-center justify-between w-[500px] shadow-[0px_0px_52px_0px_rgba(236,_72,_153,_0.5)] hover:shadow-[0px_0px_100px_0px_rgba(249,_115,_22,_0.5)] transition  duration-300 p-4 rounded-[20px]">
        <input
          type="text"
          placeholder="Items.."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleItems();
            }
          }}  
          
          onChange={handleText}
          value={text}
          className="w-[350px] bg-transparent text-white text-xl placeholder:text-slate-400 text-slate-700 text-lg border-none rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow-[0px_0px_15px_24px_rgba(236,_72,_153,_0.15)] "
        />
        <button
          onClick={handleItems}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleItems();
            }
          }}  

          className="bg-yellow-50 text-cyan-800 font-bold rounded ml-2 pl-4 pr-4 p-2"
        >
          Add Item
        </button>
      </div>

      <div
      className="transition ease-in-out duration-700 "
      >
        {items.map((item, index) => (
          <Plan
            key={index}
            index={index}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
