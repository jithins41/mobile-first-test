function formSignupSubmit(evt) {
    evt.preventDefault();
    let formData = new URLSearchParams(new FormData(evt.target).entries());
    axios.post(evt.target.action, formData).then(response => {
        if (response.data.status) {
            alert(response.data.message);
            window.location.replace('/login');
        }
        else {
            alert(response.data.message);
        }
    })
}
function formLoginSubmit(evt) {
    evt.preventDefault();
    let formData = new URLSearchParams(new FormData(evt.target).entries());
    axios.post(evt.target.action, formData).then(response => {
        if (response.data.status) {
            window.localStorage.setItem('token', response.data.token);
            switch (response.data.user.usertype) {
                case 'Admin':
                    {
                        window.location.replace('/admin');
                    }
                    break;
                case 'Guest': {
                    window.location.replace('/user');
                }
                    break;
            }
        }
        else {
            alert(response.data.message);
        }
    })
}
