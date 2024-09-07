function getDisplayName(url) {
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.replace('www.', '');
        if (hostname.includes('linkedin'))
            return 'LinkedIn';
        if (hostname.includes('github'))
            return 'GitHub';
    }
    catch (e) {
        console.error('Invalid URL:', url);
    }
    return url;
}
function populatePreview() {
    const profilePictureURL = localStorage.getItem('profile_picture');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const linkedin = localStorage.getItem('linkedin');
    const github = localStorage.getItem('github');
    const workExperience = localStorage.getItem('work_experience');
    const education = JSON.parse(localStorage.getItem('education') || '[]');
    const skills = JSON.parse(localStorage.getItem('skills') || '[]');
    const profilePictureElement = document.getElementById('preview_profile_picture');
    if (profilePictureURL) {
        profilePictureElement.src = profilePictureURL;
        profilePictureElement.style.display = 'block';
    }
    else {
        profilePictureElement.style.display = 'none';
    }
    document.getElementById('preview_name').textContent = name || 'Your Name';
    const previewEmail = document.getElementById('preview_email');
    previewEmail.textContent = email || 'Your Email';
    previewEmail.href = `mailto:${email || ''}`;
    const linkedinElement = document.querySelector('.linkedin');
    if (linkedin) {
        linkedinElement.style.display = 'block';
        const previewLinkedin = document.getElementById('preview_linkedin');
        previewLinkedin.textContent = getDisplayName(linkedin);
        previewLinkedin.href = linkedin;
    }
    else {
        linkedinElement.style.display = 'none';
    }
    const githubElement = document.querySelector('.github');
    if (github) {
        githubElement.style.display = 'block';
        const previewGithub = document.getElementById('preview_github');
        previewGithub.textContent = getDisplayName(github);
        previewGithub.href = github;
    }
    else {
        githubElement.style.display = 'none';
    }
    document.getElementById('preview_work_experience').textContent = workExperience || 'Work Experience...';
    const educationList = document.getElementById('preview_education');
    educationList.innerHTML = '';
    education.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });
    const skillsList = document.getElementById('preview_skills');
    skillsList.innerHTML = '';
    skills.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });
}
document.getElementById('save_changes').addEventListener('click', () => {
    const name = document.getElementById('preview_name').textContent || '';
    const email = document.getElementById('preview_email').textContent || '';
    const linkedin = document.getElementById('preview_linkedin').textContent || '';
    const github = document.getElementById('preview_github').textContent || '';
    const workExperience = document.getElementById('preview_work_experience').textContent || '';
    const education = [...document.querySelectorAll('#preview_education li')].map(item => item.textContent || '');
    const skills = [...document.querySelectorAll('#preview_skills li')].map(item => item.textContent || '');
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('linkedin', linkedin);
    localStorage.setItem('github', github);
    localStorage.setItem('work_experience', workExperience);
    localStorage.setItem('education', JSON.stringify(education));
    localStorage.setItem('skills', JSON.stringify(skills));
    alert('Changes saved!');
});
window.onload = populatePreview;
export {};
