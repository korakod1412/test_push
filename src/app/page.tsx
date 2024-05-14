import React from 'react';

function Page() {
  return (
    <div className="h-screen bg-green-500 flex flex-col overflow-hidden">
      <header className="flex bg-wi-500 justify-between">
        <div>Tailwind</div>
        <div>right</div>
        <input name="myInput" />
      </header>
      <div className="flex flex-1">
        <nav className="w-48 h-full bg-pink-500">sidebar</nav>
        <main className="flex-1 bg-gray-50 w-full">main</main>
        <nav className="w-48 h-full bg-pink-500">sidebar</nav>
      </div>
      <footer className="bg-orange-500">footer</footer>
    </div>
  );
}

export default Page;
