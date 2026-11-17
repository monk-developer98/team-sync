import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../../shared/state/themeSlice';

const Home = () => {
  
  let dispatch = useDispatch();

  let handleThemeChange =()=>{
    dispatch(toggleTheme())
  }

  return (
    <div>Home
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  )
}

export default Home