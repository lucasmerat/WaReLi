export default function() {
 

  this.get("books", function ({books}) {
    return books.all();
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
    return book;
  });

  this.get("movies", function ({movies}) {
    return movies.all();
  });

  this.patch("/movies/:id", function ({movies}, request) {
    const attrs = this.normalizedRequestAttrs();
    const movie = movies.find(request.params.id);
    movie.update(attrs);
    return { data: movie };
  });

  this.get("/movies/:id", function ({movies}, request) {
    const movie = movies.find(request.params.id);
    return  movie;
  });

  this.post("movies", function ({ movies }) {
    const attrs = this.normalizedRequestAttrs();
    return movies.create(attrs);
  }, {timing: 3000});

  // this.post('/movies', {errors: ['there was an error']}, 404)

  this.get("songs", function ({songs}) {
    return songs.all();
  });

  this.patch("/songs/:id", function ({songs}, request) {
    const attrs = this.normalizedRequestAttrs();
    const song = songs.find(request.params.id);
    song.update(attrs);
    return { data: song };
  });

  this.get("/songs/:id", ({songs}, request) => {
    const song = songs.find(request.params.id);
    return song;
  });

  this.post("songs", function ({ songs }) {
    const attrs = this.normalizedRequestAttrs();
    return songs.create(attrs);
  }, {timing: 3000});
}
