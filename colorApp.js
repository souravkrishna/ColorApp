
var colors = [
    {
        "id" : 1,
        "title" : "ocean at dusk",
        "color" : "#00c4e2",
        "rating" : 5
    },
    {
        "id" : 2,
        "title" : "lawn",
        "color" : "#26ac56",
        "rating" : 4
    },
    {
        "id" : 3,
        "title" : "bright red",
        "color" : "#ff0000",
        "rating" : 3
    },
    {
        "id" : 4,
        "title" : "bright red",
        "color" : "#ff0000",
        "rating" : 1
    }
]

function renderAllColors(colors)
{
    var section = document.getElementById("Section");
    section.innerHTML = "";
    colors.forEach((element) => ColorComponent(element));
}
function Colour(title,color)
{
    this.id = colors.length ===0 ? 1: colors[colors.length - 1].id + 1;
    this.title = title;
    this.color = color; 
}
function AddData()
{
  var section = document.getElementById("Section");
  var title = document.getElementById("enterColor");
  var color = document.getElementById("colorPick");
  var newColor;
  if(title.value.length === 0)
  {
    newColor = new Colour("black","#000000");
  }
  else
  {
    newColor = new Colour(title.value,color.value);
  }
  colors.push(newColor);
  section.innerHTML = "";
  renderAllColors(colors);
}
