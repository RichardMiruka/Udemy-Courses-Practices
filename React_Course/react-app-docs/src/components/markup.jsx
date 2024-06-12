// You have to close tags like < br />.
// Your component also can’t return multiple JSX tags.
// You have to wrap them into a shared parent,
// like a < div >...</div > or an empty <>...</> wrapper:
function AboutPage () {
    return (
        <>
            <h1>About</h1>
            <p> This is an about page <br /> What do you want to know about us?</p>
        </>
    );
}

export default AboutPage;
