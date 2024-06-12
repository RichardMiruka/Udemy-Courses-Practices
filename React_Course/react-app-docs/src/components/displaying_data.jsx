const user = {
    name: "Richard Miruka",
    age: 24,
    country: "Kenya",
    city: "Nairobi",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"]
};

export default function Profile() {
    return (
        <div>
            <h1>My Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Country: {user.country}</p>
            <p>City: {user.city}</p>
            <p>Skills: {user.skills.join(", ")}</p>
        </div>
    );
}

// In the code snippet above, we have a user object with some properties. 
// We can access these properties using dot notation.
// We can also access the skills array and join its elements into a string using the join method.