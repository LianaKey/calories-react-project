export const data = {
  dishes: [
    {
      id: 0,
      title: "Pepperoni pizza",
      calories: 350,
      description: "Easy pizza crust, pizza crust yeast, pepperoni, quick pizza",
      photo: "pizza.jpg",
      recommend: false,
      calculated: false
    },
    {
      id: 1,
      title: "Fried Potatos",
      calories: 312,
      description: "French fries, or simply fries, chips, finger chips, or French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.",
      photo: "potato.jpg",
      recommend: false,
      calculated: false
    },
    {
      id: 2,
      title: "Mixed Salad Greens",
      calories: 9,
      description: "5 cups loosely packed mixed greens or any favorite lettuce 5 cups loosely packed mixed greens or any favorite lettuce",
      photo: "salad.jpg",
      recommend: true,
      calculated: false
    },
    {
      id: 3,
      title: "Fried shrimps",
      calories: 277,
      description: "Fried shrimp or fried prawn is deep-fried shrimp and prawns.",
      photo: "shrimps.jpeg",
      recommend: false,
      calculated: false
    },
    {
      id: 4,
      title: "Coffee without sugar",
      calories: 0,
      description: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.",
      photo: "coffee.jpg",
      recommend: false,
      calculated: false
    },

  ],
  dayLimit: 0,
  message: {
    itemAdded: "New item succesfully added!",
    itemDeleted: "Item successfully deleted!",
    limitReached: "<p class='red-text text-darken-2 f20'>Can't add new item, you reached your calories limit!</p>",
    limitChanged: "Limit was changed!"
  }
}
