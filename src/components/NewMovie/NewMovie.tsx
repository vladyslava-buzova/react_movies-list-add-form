import { useState } from 'react';
import { Movie } from '../../types/Movie';
import { TextField } from '../TextField';

type Props = {
  onAdd: (movie: Movie) => void,
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const isInputFilled = title && description && imgUrl && imdbUrl && imdbId;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCount(curent => curent + 1);
    if (!isInputFilled) {
      return;
    }

    onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={(event) => handleSubmit(event)}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={(value) => setTitle(value)}
        required
      />

      <TextField
        name="description"
        label="Description"
        onChange={(value) => setDescription(value)}
        value={description}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        onChange={(value) => setImgUrl(value)}
        value={imgUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        onChange={(value) => setImdbUrl(value)}
        value={imdbUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        onChange={(value) => setImdbId(value)}
        value={imdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isInputFilled}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
