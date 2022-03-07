function formSubmit(evt) {
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
