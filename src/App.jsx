import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpotifySideBar from "./components/SpotifySideBar";
import MainSection from "./components/MainSection";
import SpotifyPlayer from "./components/SpotifyPlayer";

function App() {
  return (
    <Container fluid>
      <SpotifySideBar />
      <MainSection />
      <SpotifyPlayer />
    </Container>
  );
}

export default App;
