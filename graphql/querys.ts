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
