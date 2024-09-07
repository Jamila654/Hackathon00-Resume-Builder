document.getElementById('cvForm')!.addEventListener('submit', function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profile_picture') as HTMLInputElement;
    const file = profilePictureInput.files?.[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const profilePictureURL = reader.result as string;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
        const github = (document.getElementById('github') as HTMLInputElement).value;
        const workExperience = (document.getElementById('work_experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n').filter(Boolean);
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n').filter(Boolean);

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
    } else {
        localStorage.removeItem('profile_picture');
        window.location.href = '/cv_preview.html';
    }
});
