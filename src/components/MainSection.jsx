import { Col, Row } from "react-bootstrap";
import GenresBar from "./GenresBar";
import SongSection from "./SongSection";
import { useSelector } from "react-redux";

const MainSection = () => {
  const query = useSelector(state => state.query.content);

  return (
    <main className="mainPage">
      <Col xs="12" md={{ span: 9, offset: 3 }}>
        <GenresBar />
        <Row>
          {query && <SongSection artistName={query} search={true} />}
          <SongSection artistName={"Queen"} />
          <SongSection artistName={"Good Boy Daisy"} />
          <SongSection artistName={"Dua Lipa"} id={"last-section"} />
        </Row>
      </Col>
    </main>
  );
};

export default MainSection;
