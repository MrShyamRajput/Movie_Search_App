import React from 'react'

function About(props) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
  <div className="max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-center">About Movie Search App 🎬</h1>
    <p className="text-lg text-gray-300 text-center mb-4">
      Welcome to <span className="font-semibold text-white">Movie Search App</span>, your go-to platform for discovering movies effortlessly! 
      Whether you're looking for classic hits, trending blockbusters, or hidden gems, our app provides instant access to movie details.
    </p>
    
    <div className="space-y-2">
      <p className="text-gray-300">✅ <span className="font-semibold text-white">Search Any Movie</span> – Instantly find movies by title.</p>
      <p className="text-gray-300">✅ <span className="font-semibold text-white">Detailed Information</span> – Get release year, posters, and more.</p>
      <p className="text-gray-300">✅ <span className="font-semibold text-white">User-Friendly UI</span> – Simple, fast, and mobile-friendly design.</p>
      <p className="text-gray-300">✅ <span className="font-semibold text-white">Smooth Experience</span> – Powered by React & Tailwind CSS for a seamless interface.</p>
    </div>
    
    <p className="text-center text-lg text-gray-400 mt-4">Start exploring now and find your next favorite movie! 🍿🎥</p>
  </div>
</div>

  )
}

export default About
