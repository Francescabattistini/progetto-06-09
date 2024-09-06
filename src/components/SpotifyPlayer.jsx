import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction } from "../redux/actions";

const SpotifyPlayer = () => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const selectedSong = useSelector(state => state.selected.content);
  const likedList = useSelector(state => state.liked.content);
  useEffect(() => {
    if (likedList.filter(s => s.id === selectedSong.id).length >= 1) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likedList, selectedSong]);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        {selectedSong && (
          <Col xs={{ span: 2, offset: 2 }} className="position-absolute mt-2">
            <div className="d-flex gap-2 align-items-center">
              <img src={selectedSong.album.cover_small} alt="selected-song-cover" />
              <div className="d-flex flex-column text-light">
                <p className="m-0 text-truncate">{selectedSong.title}</p>
                <p className="m-0 text-truncate">{selectedSong.artist.name}</p>
              </div>
              {liked ? (
                <HeartFill
                  type="button"
                  onClick={() => dispatch(dislikeAction(selectedSong))}
                  className={"d-block text-light flex-shrink-0"}
                />
              ) : (
                <Heart
                  type="button"
                  onClick={() => dispatch(likeAction(selectedSong))}
                  className={"d-block text-light flex-shrink-0"}
                />
              )}
            </div>
          </Col>
        )}
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs="6" md="4" className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SpotifyPlayer;
