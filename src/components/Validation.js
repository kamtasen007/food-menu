const Validation = (value) => {
    let error = {}

    if (!value.name) {
        error.name = "Name required"
    }
    else if (value.name.length < 5) {
        error.name = "Name must be more than 3 character"
    }

    if (!value.password) {
        error.password = "password required"
    }
    else if (value.password.length < 6) {
        error.password = "Password must be more than 6 character"
    }
    return error;
}
export default Validation