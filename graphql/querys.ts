import { gql } from '@apollo/client';

export const getCharctersName = gql`
  query findName($name: String) {
    nameCharacters(filter: $name) {
      id
      name
      image
    }
  }
`;

export const getFilterCharcters = gql`
  query filterCharacters($filter: FilterInput) {
    filterCharacters(filter: $filter) {
      id
      name
      image
      status
      species
      type
      gender
      origin {
        name
      }
      image
    }
  }
`;
