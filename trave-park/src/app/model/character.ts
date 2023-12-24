export interface Character {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  phone?: string;
  email?: string;
}

export interface CharacterSearchResult {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}
