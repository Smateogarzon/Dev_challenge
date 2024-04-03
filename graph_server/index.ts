const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

interface Ifilter {
  status: string;
  gender: string;
  species: string;
  all: boolean;
  name: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TOrigin;
  image: string;
}
type TOrigin = {
  name: string;
};
const typeDefs = gql`
  type Query {
    nameCharacters(filter: String): [Character!]
    filterCharacters(filter: FilterInput): [Character!]
    characterId(id: ID!): Character!
  }
  input FilterInput {
    status: String
    gender: String
    species: String
    all: Boolean
    name: String
  }
  type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    image: String
  }

  type Origin {
    name: String
  }
`;

const resolvers = {
  Query: {
    nameCharacters: async (_: any, { filter }: { filter: string }) => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${filter}`
        );

        const characters = response.data.results.slice(0, 10);

        return characters;
      } catch (error) {
        throw 'el personaje no existe';
      }
    },
    filterCharacters: async (_: any, { filter }: { filter: Ifilter }) => {
      try {
        let urlFilter: string = 'https://rickandmortyapi.com/api/character/?';
        if (filter.status) urlFilter += `status=${filter.status}&`;
        if (filter.gender) urlFilter += `gender=${filter.gender}&`;
        if (filter.species) urlFilter += `species=${filter.species}&`;
        if (filter.name) urlFilter += `name=${filter.name}&`;
        if (filter.all) urlFilter = 'https://rickandmortyapi.com/api/character/?';
        const { data } = await axios.get(urlFilter);

        let characters: ICharacter[] = data.results;
        if (data.info.pages > 1) {
          for (let i = 2; i <= data.info.pages; i++) {
            const { data } = await axios.get(`${urlFilter}&page=${i}`);
            characters = [...characters, ...data.results];
          }

          return characters;
        }
        return characters;
      } catch (error) {}
    },
    characterId: async (_: any, { id }: { id: number }) => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return data;
      } catch (error) {
        throw 'el personaje no existe';
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`Servidor listo en ${url}`);
});
