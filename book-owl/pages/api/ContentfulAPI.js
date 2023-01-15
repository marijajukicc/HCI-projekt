import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: space,
    accessToken: accessToken
});

export async function fetchEntries() {

    const response = await client.getContentType('books');
    const entries = await client.getEntries();

    if (entries.items)
        return entries.items
}

export default { fetchEntries };