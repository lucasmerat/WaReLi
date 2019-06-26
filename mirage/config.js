export default function() {
  let books = {
    id: 1,
    type: "book",
    attributes: {
      title: "To kill a mockingbird",
      finished: false,
      notes: ""
    }
  };

  this.get("books", () => {
    return { data: books };
  });
}
