document.getElementById('cvForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const profilePictureInput = document.getElementById('profile_picture');
    const file = profilePictureInput.files?.[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        const profilePictureURL = reader.result;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const linkedin = document.getElementById('linkedin').value;
        const github = document.getElementById('github').value;
        const workExperience = document.getElementById('work_experience').value;
        const education = document.getElementById('education').value.split('\n').filter(Boolean);
        const skills = document.getElementById('skills').value.split('\n').filter(Boolean);
        localStorage.setItem('profile_picture', profilePictureURL);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('linkedin', linkedin);
        localStorage.setItem('github', github);
        localStorage.setItem('work_experience', workExperience);
        localStorage.setItem('education', JSON.stringify(education));
        localStorage.setItem('skills', JSON.stringify(skills));
        window.location.href = '/cv_preview.html';
    };
    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        localStorage.removeItem('profile_picture');
        window.location.href = '/cv_preview.html';
    }
});
export {};
