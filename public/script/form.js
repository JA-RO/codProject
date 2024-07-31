function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('imagePreview');
        output.innerHTML = '<img src="' + reader.result + '" alt="Image Preview">';
    }
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    console.log('First Name:', formData.get('firstName'));
    console.log('Last Name:', formData.get('lastName'));
    console.log('Address:', formData.get('address'));
    console.log('Phone Number:', formData.get('phone'));
    console.log('Description:', formData.get('description'));

    const photo = formData.get('photo');
    if (photo && photo.size > 0) {
        console.log('Photo:', photo.name);
    }
    console.log(form)

    // You can now send formData to a server or handle it further
    // Example: send to a server using fetch
    fetch(window.location.href+'/submit-form', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
