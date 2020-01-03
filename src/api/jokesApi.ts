import axios from 'axios';

export interface Joke {
  type: string;
  setup: string;
  punchline: string;
}

export interface Jokes {
  jokes: Joke[];
}

export async function getRandomJokes(): Promise<Jokes> {
  const url = `https://official-joke-api.appspot.com/jokes/ten`;

  const jokesResponse = await axios.get<Joke[]>(url);
  return { jokes: jokesResponse.data };
}
