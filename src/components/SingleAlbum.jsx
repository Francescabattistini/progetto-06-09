import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAction, likeAction, selectAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const SingleAlbum = ({ song }) => {
  const [liked, setLiked] = useState(false);
  const likedList = useSelector(state => state.liked.content);

  useEffect(() => {
    if (likedList.filter(s => s.id === song.id).length >= 1) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likedList]);

  const dispatch = useDispatch();
  return (
    <Col xs="12" sm="6" lg="4" xl="3" className="text-center imgLinks py-3 ">
      <div className="position-relative album-img">
        <img
          type="button"
          className="img-fluid"
          src={song.album.cover_medium}
          alt="track"
          onClick={() => dispatch(selectAction(song))}
        />
        {liked ? (
          <div className="rounded-circle bg-success">
            <HeartFill
              type="button"
              onClick={() => dispatch(dislikeAction(song))}
              className={
                "d-block flex-shrink-0 bg-success rounded-circle m-3 display-6 p-2 position-absolute bottom-0 end-0"
              }
            />
          </div>
        ) : (
          <Heart
            type="button"
            onClick={() => dispatch(likeAction(song))}
            className={
              "d-block flex-shrink-0 bg-success rounded-circle m-3 display-6 p-2 position-absolute bottom-0 end-0"
            }
          />
        )}
      </div>
      <p>
        track: {song.title} <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
