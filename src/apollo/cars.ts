import {gql} from "@apollo/client";

export const ALL_CARS_QUERY = gql`
query AllCars {
 cars {
  id
  brand
  model
  color
  model_year
  img_src
  price
  description
  availability
}
}`