const projects = [
  {
    title: "SkateSpotter",
    subtitle: "MERN Stack",
    description:
      "An app for the skateboarding community that allows users to post the location and description of skate spots in their area.",
    image: "/images/skatespotter.png",
    link: "https://blooming-wildwood-28468.herokuapp.com/spots",
  },
  {
    title: "Digipets",
    subtitle: "Python, Django, PostgreSQL",
    description:
      "The virtual pet app that gives users the joy of owning a pet without the obligations of real-life ownership.",
    image: "../public/images/digipets.png",
    link: "https://digipetsforever.herokuapp.com/",
  },
  {
    title: "Daily Lab Data",
    subtitle: "MongoDB/Mongoose, Node.js, Express",
    description:
      "Allows water treatment technicians to store daily lab results on the cloud.",
    image: "../public/images/dailylabdata.png",
    link: "https://tp-lab-data.herokuapp.com/",
  },
]

module.exports = {
  getAll: getAll,
}

function getAll() {
  return projects;
}