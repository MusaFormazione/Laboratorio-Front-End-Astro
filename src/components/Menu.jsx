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
      <li>
        <a href="/products" class={(path === '/products') && styles.active}>Products</a>
      </li>
      <li>
        <a href="/blog" class={(path === '/blog') && styles.active}>Blog</a>
      </li>
      <li>
        <a href="/images" class={(path === '/images') && styles.active}>Images</a>
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
