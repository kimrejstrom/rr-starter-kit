import axios from 'axios';

interface AuthorsResponse {
  authors: string[];
}

export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}

export interface PoemsResult {
  poems: Poem[];
}

const randomItem = (items: Array<any>) =>
  items[Math.floor(Math.random() * items.length)];

export async function getRandomAuthor(): Promise<string> {
  const url = `https://poetrydb.org/author`;

  const authorsResponse = await axios.get<AuthorsResponse>(url);
  return randomItem(authorsResponse.data.authors);
}

export async function getPoemsByAuthor(author: string): Promise<PoemsResult> {
  const url = `https://poetrydb.org/author/${encodeURI(author)}`;

  const poemsResponse = await axios.get<Poem[]>(url);
  return { poems: poemsResponse.data };
}
