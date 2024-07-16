document.getElementById('certificateUpload').addEventListener('change', function() {
    const fileList = this.files;
    const certificateList = document.getElementById('certificateList');
    certificateList.innerHTML = '';

    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const listItem = document.createElement('div');
        listItem.classList.add('certificate-item');
        listItem.innerText = file.name;
        certificateList.appendChild(listItem);
    }
});

