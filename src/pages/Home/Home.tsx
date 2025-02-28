import {HomeContainer} from './style';
import { User } from '../../components/UserCard/User';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext, useState } from 'react';

export function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [userName, setUserName] = useState('maatbm');

  return (
    <HomeContainer>
      <input type="text" placeholder="Digite o nome de um usuário" onChange={(e)=>{setUserName(e.target.value)}}/>
      <User userName={userName}/>
      <button onClick={()=>{toggleTheme()}}>Mudar para tema {theme === 'light'?'escuro':'claro'}</button>
    </HomeContainer>
  );
}