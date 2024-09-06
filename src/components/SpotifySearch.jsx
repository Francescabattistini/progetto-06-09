import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { queryAction } from "../redux/actions";

const SpotifySearch = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(queryAction(inputValue));
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <InputGroup className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          required
        />
        <div className="input-group-append">
          <Button type="submit" variant="outline-secondary" className="btn-sm h-100">
            GO
          </Button>
        </div>
      </InputGroup>
    </Form>
  );
};

export default SpotifySearch;
