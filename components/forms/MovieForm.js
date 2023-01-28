import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMovie, updateMovie } from '../../api/movieData';

const initialStateMovF = {
  title: '',
  poster: '',
  description: '',
};

export default function MovieForm({ obj }) {
  const [formInput, setFormInput] = useState(initialStateMovF);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMovie(formInput)
        .then(() => router.push(`/movies/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMovie(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updateMovie(patchPayloadFBK).then(() => {
          router.push('/movies');
        });
      });
    }
  };

  return (
    <div className="member-form-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="member-form-text">{obj.firebaseKey ? 'Update' : 'Add New'} Movie</h2>
        <FloatingLabel
          controlId="floatingInput1"
          label="Title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formInput.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Description"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter Movie Description"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Movie Poster URL"
          className="mb-3"
        >
          <Form.Control
            type="url"
            placeholder="Enter Image URL"
            name="poster"
            value={formInput.poster}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button type="submit" variant="light">{obj.firebaseKey ? 'Update' : 'Create'}</Button>
      </Form>
    </div>
  );
}

MovieForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    uid: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

MovieForm.defaultProps = {
  obj: initialStateMovF,
};
