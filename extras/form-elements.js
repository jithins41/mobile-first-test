module.exports = {
    button_login: {
        type: "submit",
        title: "Login",
        class: "button-normal",
        path: "/sign-up",
        botText: "New user? Go to signup"
    },
    button_signup: {
        type: "submit",
        title: "Sign up",
        class: "button-normal",
        path: "/login",
        botText: "Already have account? Go to login"
    },
    login: [
        {
            title: "Username",
            name: "username",
            id: "username",
            type: "text",
            class: "input-text"
        },
        {
            title: "Password",
            name: "Password",
            id: "Password",
            type: "Password",
            class: "input-text"
        }
    ],
    signup: [
        {
            title: "Username",
            name: "username",
            id: "username",
            type: "text",
            class: "input-text"
        },
        {
            title: "Name",
            name: "name",
            id: "name",
            type: "text",
            class: "input-text"
        },
        {
            title: "Qualifications",
            name: "qualifications",
            id: "qualifications",
            type: "text",
            class: "input-text"
        },
        {
            title: "City",
            name: "city",
            id: "city",
            type: "text",
            class: "input-text"
        },
        {
            title: "Phone",
            name: "phone",
            id: "phone",
            type: "number",
            class: "input-text"
        },
    ]
}