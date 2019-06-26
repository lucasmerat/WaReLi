export default function() {
  let books = {
    id: 0,
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

  this.post("books", ({books}, request)=>{
    return books.create(JSON.parse(request.requestBody).title);
  })
}
