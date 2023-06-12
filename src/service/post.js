
const PostToData = (char, action) => {


    const objToPost = {
        name: char.name,
        salary: char.salary,
        isPromote: char.isPromote,
        action,
        JSONkey: char.JSONkey
    }

    fetch("http://localhost:3000/chars", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(objToPost)
    })
    .then(response => console.log(response))

}

export default PostToData;