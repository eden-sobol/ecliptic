# ecliptic
An easier to use front end js library base off objects.

index.html is the base file to use that already has links to js.

ecliptic uses an object to load html and css.
create an object in the script.js called "ecliptic".
in the object, put another object called "html" with two strings, "head", and "body". If you want multiline, they need to use backticks.
in the root object put a string "style".

example:
`
const ecliptic = {
    html: {
        head: `
        <title>ecliptic</title>
        `,
        body: `
        <p>hi</p>
        <a href="https://edensobol.com">eden sobol</a>
        `
    },
    style: `
    p {
        color: red;
    }
    a {
        color: green;
    }
    `
}
`
