class RestaurantsController < ApplicationController
  def index
    @restaurants = [
      {
        title:"Rintaro",
        location: "San Francisco"
      },
      {
        title:"Pizzaria Delfina",
        location: "San Francisco"
      },
      {
        title:"Locanda",
        location: "San Francisco"
      },
      {
        title:"Gracias Madre",
        location: "San Francisco"
      }
    ]
  end
end
