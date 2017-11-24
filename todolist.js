function createTodo() {
  var title = document.getElementById('item_title').value;
  var description = document.getElementById('item_description').value;

  var list_node = document.createElement("LI");
  var title_text_node = document.createTextNode(title);
  var description_text_node = document.createTextNode(description);
  var div = document.createElement("DIV");
  var h = document.createElement("H3");
  var p = document.createElement("P");

  h.appendChild(title_text_node);
  p.appendChild(description_text_node);
  div.appendChild(h);
  div.appendChild(p);

  list_node.appendChild(div);
  document.getElementById("list").appendChild(list_node);
}
