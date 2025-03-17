import React from 'react'

function MovieCard(props) {
  return (
   
    <div>
      <div className='bg flex flex-wrap px-4 lg:px-10 mt-17 '>

      {props.allmovieData.map((movie, index) => (
        
        <div className="bg-[#002e4b] p-3 rounded-2xl m-5 ml-10 h-110 w-60 shadow-lg transition-transform duration-300 hover:scale-105 active:scale-110">
          <img className='rounded-lg h-[70%] w-full mb-2' src={movie.Poster}
          alt="" />
          <h4 className='text-xl text-white font-bold'>  Title-{movie.Title} </h4>
          <p className='text-white'>
          <b>Type-{movie.Type}</b>
          <br/>
          <b>Year-{movie.Year}</b>
          
          </p>
        </div>
      ))}  
      </div>
    </div>
  )
}

export default MovieCard