# ecliptic
An easier to use front end js library base off objects.

index.html is the base file to use that already has links to js.
or install and manually link to ecliptic.js with npm install @eden-sobol\ecliptic

ecliptic uses an object to load html and css.
create an object in the script.js called "ecliptic".
in the object, put another object called "html" with two strings, "head", and "body". If you want multiline, they need to use backticks.
in the root object put a string "style".

example:
<code>
const ecliptic = {
    html: {
        head: `` `
        <title>ecliptic</title>
        ` ``,
        body: `` `
        <p>hi</p>
        <a href="https://edensobol.com">eden sobol</a>
        ` ``
    },
    style: `` `
    p {
        color: red;
    }
    a {
        color: green;
    }
    ` ``
}
</code>

to quickly create a new project you can copy this as a zip file and unzip it
