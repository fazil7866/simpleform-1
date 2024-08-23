import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [interests, setInterests] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, gender, category, interests };
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/respondents');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-xl mb-4">Simple Form</h2>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="border px-2 py-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <select
            className="border px-2 py-1 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Interests:</label>
          <div>
            <label>
              <input
                type="radio"
                value="Coding"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Coding
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="Music"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Music
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="Sports"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Sports
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label>
            <input type="checkbox" required />
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
