import {HomeContainer} from './style';
import { User } from '../../components/UserCard/User';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HomeContainer>
      <User />
      <button onClick={()=>{toggleTheme()}}>Tema {theme === 'light'?'escuro':'claro'}</button>
    </HomeContainer>
  );
}