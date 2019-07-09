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
      type: "Movie"
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

  this.patch("/movies/:id", () => {
    return { data: null };
  });

  this.post("movies", ({ movies }, request) => {
    return movies.create(JSON.parse(request.requestBody).title);
  });


  this.get("songs", () => {
    return { data: songs };
  });

  this.patch("/songs/:id", () => {
    return { data: null };
  });

  this.post("songs", ({ songs }, request) => {
    return songs.create(JSON.parse(request.requestBody).title);
  });
}
