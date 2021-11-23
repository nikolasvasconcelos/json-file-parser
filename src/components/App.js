import React from 'react'
import { BinaryTreeOutput } from './BinaryTreeOutput';
import { FileContent } from './FileContent';
import FileInput from "./FileReader";

const App = () => (
  <div className="w-min sm:w-screen flex flex-col justify-center align-middle">
    <h1 className="text-2xl text-center flex-none font-semibold mb-2.5">Process the input into a tree</h1>
    <FileInput />
    <div className="flex flex-col lg:flex-row align-middle">
      <FileContent />
      <BinaryTreeOutput />
    </div>
  </div>
);

export default App;
