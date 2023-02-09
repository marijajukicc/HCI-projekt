import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
    space: space,
    accessToken: accessToken
});

export async function getBooks() {
    const entries = await client.getEntries({
        content_type: 'books',
    }

    );

    if (entries.items)
        return entries.items
}

export async function getBlogs() {
    const entries = await client.getEntries({
        content_type: 'blogs',
    }

    );

    if (entries.items)
        return entries.items
}

export default { getBooks, getBlogs };