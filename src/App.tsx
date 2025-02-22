import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import LanguageSelector from './components/LanguageSelector';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Modal from './components/Modal';

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">

      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" className="transform hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transform hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
        <FormattedMessage id="app.title" />
      </h1>

      {/* Language Selector */}
      <div className="mb-6">
        <LanguageSelector />
      </div>

      <div className="mt-6 bg-white shadow-lg rounded-xl p-6 w-full sm:w-96 flex flex-col items-center space-y-4">
        <button 
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105"
          onClick={() => setCount(count + 1)}
        >
          <FormattedMessage id="app.label.count" values={{ count }} />
        </button>
        <p className="text-gray-500 text-center">
          <FormattedMessage id="app.label.edit" values={{ file: 'src/App.tsx' }} />
        </p>
      </div>

      <button 
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md shadow-lg transform transition-all hover:bg-red-700 hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <FormattedMessage id="app.label.modal" />
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
