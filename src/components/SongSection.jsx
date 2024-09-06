import SingleAlbum from "./SingleAlbum";
import { Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const SongSection = ({ artistName, id, search }) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (resp.ok) {
        const data = await resp.json();
        setSongs(data.data.slice(0, 4));
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [artistName]);

  return (
    <Col xs="10">
      <section id={id}>
        <h2 className="text-light">{search ? "Search" : artistName}</h2>
        <Row>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner variant="success" />
            </div>
          ) : (
            songs.map(song => <SingleAlbum key={song.id} song={song} />)
          )}
        </Row>
      </section>
    </Col>
  );
};

export default SongSection;
