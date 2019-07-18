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

  let movies = {
    id: 0,
    type: "movie",
    attributes: {
      title: "asdfasdf",
      finished: false,
      notes: "",
      type: "Movie"
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

  this.post("books", ({ books }, request) => {
    return books.create(JSON.parse(request.requestBody).title);
  });

  this.patch("/books/:id", () => {
    return { data: null };
  });

  this.get("/books/:id", () => {
    return { data: null };
  });

  this.get("movies", () => {
    return { data: movies };
  });

  this.patch("/movies/:id", function ({movies}, request) {
    const attrs = this.normalizedRequestAttrs();
    const movie = movies.find(request.params.id);
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

  this.patch("/songs/:id", () => {
    return { data: null };
  });

  this.get("/songs/:id", () => {
    return { data: null };
  });

  this.post("songs", ({ songs }, request) => {
    return songs.create(JSON.parse(request.requestBody).title);
  });
}
