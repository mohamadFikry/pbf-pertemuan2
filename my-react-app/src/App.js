import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';


function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  )
}

function Main() {
  return (
  <main>
    <h2>Selamat datang di Aplikasi React Saya</h2>
    <p>Ini adalah konten utama.</p>
  </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  )
}

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type='text' placeholder='Nama' value={name} onChange={handleNameChange}/>
      <input type='number' placeholder='Umur' value={age} onChange={handleAgeChange}/>
      <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <Footer />
    </div>
  );
}

export default App;
