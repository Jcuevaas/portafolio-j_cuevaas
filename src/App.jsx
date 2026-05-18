import "./App.css";
import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./auth";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  const login = async () => {

    try {

      await signInWithEmailAndPassword(auth, email, password);

      setLogged(true);

    } catch (error) {

      alert(error.message);

    }

  };

  const logout = async () => {

    await signOut(auth);

    setLogged(false);

  };

  if (logged) {

    return (

      <div className="container">

        <div className="hero">

          <>
  <nav className="navbar">

    <h2>José.dev</h2>

    <ul>
      <li>Inicio</li>
      <li>Skills</li>
      <li>Proyectos</li>
    </ul>

  </nav>

  <div className="container">

    <div className="hero">

      <img
        src="https://i.imgur.com/HeIi0wU.png"
        alt="profile"
        className="profile"
      />

      <h1>José Cuevas</h1>

      <h2>Ingeniería en Electrónica</h2>

      <p>
        Desarrollador web y apasionado por tecnología,
        automatización y proyectos electrónicos.
      </p>

      <div className="skills">

        <h3>Habilidades</h3>

        <div className="skills-grid">

          <div className="skill-card">React</div>
          <div className="skill-card">Firebase</div>
          <div className="skill-card">Arduino</div>
          <div className="skill-card">Python</div>

        </div>

      </div>

      <div className="projects">

        <h2>Proyectos</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>Robot Sigue Líneas</h3>

            <p>
              Robot autónomo usando sensores infrarrojos y puente H.
            </p>
          </div>

          <div className="project-card">
            <h3>Detector de Fuego</h3>

            <p>
              Sistema Arduino con alarma y bomba de agua.
            </p>
          </div>

        </div>

      </div>

      <button onClick={logout}>
        Cerrar Sesión
      </button>

    </div>

  </div>
</>

        </div>

      </div>

    );

  }

  return (

    <div className="container">

      <div className="hero">

        <h1>Login Portfolio</h1>

        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>
          Iniciar Sesión
        </button>

      </div>

    </div>

  );

}

export default App;