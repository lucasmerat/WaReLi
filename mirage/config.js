export default function() {
  let books = {
    id: 0,
    type: "book",
    attributes: {
      title: "To kill a mockingbird",
      finished: false,
      notes: "",
      type: "Book"
    }
  };

  let songs = {
    id: 0,
    type: "song",
    attributes: {
      title: "Hey Ya",
      finished: false,
      notes: "",
      type: "Song"
    }
  };

  this.get("books", () => {
    return { data: books };
  });

  this.post("books", function ({ books }) {
    const attrs = this.normalizedRequestAttrs();
    return books.create(attrs);
  }, {timing: 3000});

  this.patch("/books/:id", function ({books}, request) {
    const attrs = this.normalizedRequestAttrs();
    const book = books.find(request.params.id);
    book.update(attrs);
    return { data: book };
  });

  this.get("/books/:id", ({books}, request) => {
    const book = books.find(request.params.id);
    return { data: book };
  });

  this.get("movies", function ({movies}, request) {
    return movies.all();
  });

  this.patch("/movies/:id", function ({movies}, request) {
    const attrs = this.normalizedRequestAttrs();
    const movie = movies.find(request.params.id);
    console.log(attrs, movie, request.params.id)
    movie.update(attrs);
    return { data: movie };
  });

  this.get("/movies/:id", ({movies}, request) => {
    const movie = movies.find(request.params.id);
    return { data: movie };
  });

  this.post("movies", function ({ movies }) {
    const attrs = this.normalizedRequestAttrs();
    return movies.create(attrs);
  }, {timing: 3000});

  // this.post('/movies', {errors: ['there was an error']}, 404)

  this.get("songs", () => {
    return { data: songs };
  });

  this.patch("/songs/:id", function ({songs}, request) {
    const attrs = this.normalizedRequestAttrs();
    const song = songs.find(request.params.id);
    song.update(attrs);
    return { data: song };
  });

  this.get("/songs/:id", ({songs}, request) => {
    const song = songs.find(request.params.id);
    return { data: song };
  });

  this.post("songs", function ({ songs }) {
    const attrs = this.normalizedRequestAttrs();
    console.log(songs.create(attrs))
    return songs.create(attrs);
  }, {timing: 3000});
}
