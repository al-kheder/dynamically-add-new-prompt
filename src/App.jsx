import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePromptChange = (index, event) => {
    const { name, value } = event.target;
    const newPrompts = [...prompts];
    newPrompts[index] = { ...newPrompts[index], [name]: value };
    setPrompts(newPrompts);
  };

  const handleAddPrompt = () => {
    setPrompts([...prompts, { key: "", value: "" }]);
  };

  const handleDeletePrompt = (index) => {
    const newPrompts = prompts.filter((_, i) => i !== index);
    setPrompts(newPrompts);
  };

  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form action="" className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-2xl font-semibold">About you</legend>
          <label className="text-3xl font-semibold" htmlFor="firstName">
            What's your name?
          </label>
          <input
            className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            onChange={handleInput}
          />
          <input
            className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            onChange={handleInput}
          />
          <label className="text-3xl font-semibold" htmlFor="email">
            What's your email?
          </label>
          <input
            className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            onChange={handleInput}
          />
          <label className="text-3xl font-semibold" htmlFor="dob">
            What's your date of birth?
          </label>
          <input
            className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-5 focus:outline-indigo-200"
            type="date"
            id="dob"
            name="dob"
            max={2005 - 1 - 20}
            placeholder="Date of birth"
            onChange={handleInput}
          />
          <label className="text-3xl font-semibold" htmlFor="gender">
            What's your gender?
          </label>
          <select name="gender" id="gender" onChange={handleInput}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </fieldset>

        <fieldset className="flex flex-col border py-1 px-4 mt-4">
          <legend className="text-2xl font-semibold">Additional Info</legend>
          {prompts.map((prompt, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mr-2 focus:outline-indigo-200"
                type="text"
                name="key"
                placeholder="Key"
                value={prompt.key}
                onChange={(e) => handlePromptChange(index, e)}
              />
              <input
                className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mr-2 focus:outline-indigo-200"
                type="text"
                name="value"
                placeholder="Value"
                value={prompt.value}
                onChange={(e) => handlePromptChange(index, e)}
              />
              <button
                type="button"
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDeletePrompt(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleAddPrompt}
          >
            Add Prompt
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default App;
