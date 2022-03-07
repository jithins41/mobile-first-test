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
            input: "input",
            title: "Username",
            name: "username",
            id: "username",
            type: "text",
            class: "input-text"
        },
        {
            input: "input",
            title: "Password",
            name: "Password",
            id: "password",
            type: "password",
            class: "input-text"
        }
    ],
    signup: [
        {
            input: "input",
            title: "Username",
            name: "username",
            id: "username",
            type: "text",
            class: "input-text"
        },
        {
            input: "input",
            title: "Name",
            name: "name",
            id: "name",
            type: "text",
            class: "input-text"
        },
        {
            input: "input",
            title: "Qualifications",
            name: "qualifications",
            id: "qualifications",
            type: "text",
            class: "input-text"
        },
        {
            input: "input",
            title: "City",
            name: "city",
            id: "city",
            type: "text",
            class: "input-text"
        },
        {
            input: "input",
            title: "Phone",
            name: "phone",
            id: "phone",
            type: "number",
            class: "input-text"
        },
        {
            input: "select",
            title: "Usertype",
            name: "usertype",
            id: "usertype",
            options: ["Admin", "Guest"],
            class: "input-text"
        },
        {
            input: "input",
            title: "Password",
            name: "password",
            id: "password",
            type: "password",
            class: "input-text"
        }
    ]
}