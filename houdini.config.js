/** @type {import('houdini').ConfigFile} */
const config = {
    "apiUrl": "https://swapi-graphql.netlify.app/.netlify/functions/index",
    "plugins": {
        "houdini-svelte": {
            "client": "./src/client"
        }
    }
}

export default config
