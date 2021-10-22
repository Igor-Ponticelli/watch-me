import { useEffect, useState } from 'react';
import { Button } from '../components/Button'; /*SideBar*/

import { api } from '../services/api';

import '../styles/sidebar.scss'; /*SideBar*/

// SideBar
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
// SideBar

export function SideBar() {

  

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]); /* AMBOS */


  
  // SideBar
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  // SideBar


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

return (

    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}