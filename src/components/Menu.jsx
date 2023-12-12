import { useState } from "preact/hooks";
import styles from '../menu.module.css';

export default function Menu({path}) {
  const [isLogged, setIsLogged] = useState(false);
  
  function handleLogin(bool) {
    setIsLogged(bool);
  }

  return(
    <ul>
      <li>
        <a href="/" class={(path == '/') && styles.active}>
          Home
        </a>
      </li>
      <li>
        <a href="/about" class={(path == '/about') && styles.active}>
          About
        </a>
      </li>
      {!isLogged ? (
      <li>
        <button onClick={() => handleLogin(true)}>
          Login
        </button>
      </li>
      ) : (
      <li>
        <button onClick={() => handleLogin(false)}>
          Logout
        </button>
      </li>
      )}
    </ul>
  )
}
