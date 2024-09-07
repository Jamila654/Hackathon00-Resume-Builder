function getDisplayName(url: string): string {
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.replace('www.', '');
        if (hostname.includes('linkedin')) return 'LinkedIn';
        if (hostname.includes('github')) return 'GitHub';
    } catch (e) {
        console.error('Invalid URL:', url);
    }
    return url;
}

function populatePreview(): void {
    const profilePictureURL = localStorage.getItem('profile_picture');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const linkedin = localStorage.getItem('linkedin');
    const github = localStorage.getItem('github');
    const workExperience = localStorage.getItem('work_experience');
    const education = JSON.parse(localStorage.getItem('education') || '[]') as string[];
    const skills = JSON.parse(localStorage.getItem('skills') || '[]') as string[];

    const profilePictureElement = document.getElementById('preview_profile_picture') as HTMLImageElement;
    if (profilePictureURL) {
        profilePictureElement.src = profilePictureURL;
        profilePictureElement.style.display = 'block';
    } else {
        profilePictureElement.style.display = 'none';
    }

    (document.getElementById('preview_name') as HTMLElement).textContent = name || 'Your Name';
    const previewEmail = document.getElementById('preview_email') as HTMLAnchorElement;
    previewEmail.textContent = email || 'Your Email';
    previewEmail.href = `mailto:${email || ''}`;
    
    const linkedinElement = document.querySelector('.linkedin') as HTMLElement;
    if (linkedin) {
        linkedinElement.style.display = 'block';
        const previewLinkedin = document.getElementById('preview_linkedin') as HTMLAnchorElement;
        previewLinkedin.textContent = getDisplayName(linkedin);
        previewLinkedin.href = linkedin;
    } else {
        linkedinElement.style.display = 'none';
    }

    const githubElement = document.querySelector('.github') as HTMLElement;
    if (github) {
        githubElement.style.display = 'block';
        const previewGithub = document.getElementById('preview_github') as HTMLAnchorElement;
        previewGithub.textContent = getDisplayName(github);
        previewGithub.href = github;
    } else {
        githubElement.style.display = 'none';
    }

    (document.getElementById('preview_work_experience') as HTMLElement).textContent = workExperience || 'Work Experience...';

    const educationList = document.getElementById('preview_education') as HTMLElement;
    educationList.innerHTML = '';
    education.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });

    const skillsList = document.getElementById('preview_skills') as HTMLElement;
    skillsList.innerHTML = '';
    skills.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });
}

document.getElementById('save_changes')!.addEventListener('click', () => {
    const name = (document.getElementById('preview_name') as HTMLElement).textContent || '';
    const email = (document.getElementById('preview_email') as HTMLAnchorElement).textContent || '';
    const linkedin = (document.getElementById('preview_linkedin') as HTMLAnchorElement).textContent || '';
    const github = (document.getElementById('preview_github') as HTMLAnchorElement).textContent || '';
    const workExperience = (document.getElementById('preview_work_experience') as HTMLElement).textContent || '';

    const education = [...document.querySelectorAll('#preview_education li')].map(item => (item as HTMLElement).textContent || '');
    const skills = [...document.querySelectorAll('#preview_skills li')].map(item => (item as HTMLElement).textContent || '');

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
