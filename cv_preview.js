// function getDisplayName(url: string): string {
//     try {
//         const urlObj = new URL(url);
//         const hostname = urlObj.hostname.replace('www.', '');
//         if (hostname.includes('linkedin')) return 'LinkedIn';
//         if (hostname.includes('github')) return 'GitHub';
//     } catch (e) {
//         console.error('Invalid URL:', url);
//     }
//     return url;
// }
// function populatePreview(): void {
//     const profilePictureURL = localStorage.getItem('profile_picture');
//     const name = localStorage.getItem('name');
//     const email = localStorage.getItem('email');
//     const linkedin = localStorage.getItem('linkedin');
//     const github = localStorage.getItem('github');
//     const workExperience = localStorage.getItem('work_experience');
//     const education = JSON.parse(localStorage.getItem('education') || '[]') as string[];
//     const skills = JSON.parse(localStorage.getItem('skills') || '[]') as string[];
//     const profilePictureElement = document.getElementById('preview_profile_picture') as HTMLImageElement;
//     if (profilePictureURL) {
//         profilePictureElement.src = profilePictureURL;
//         profilePictureElement.style.display = 'block';
//     } else {
//         profilePictureElement.style.display = 'none';
//     }
//     (document.getElementById('preview_name') as HTMLElement).textContent = name || 'Your Name';
//     const previewEmail = document.getElementById('preview_email') as HTMLAnchorElement;
//     previewEmail.textContent = email || 'Your Email';
//     previewEmail.href = `mailto:${email || ''}`;
//     const linkedinElement = document.querySelector('.linkedin') as HTMLElement;
//     if (linkedin) {
//         linkedinElement.style.display = 'block';
//         const previewLinkedin = document.getElementById('preview_linkedin') as HTMLAnchorElement;
//         previewLinkedin.textContent = getDisplayName(linkedin);
//         previewLinkedin.href = linkedin;
//     } else {
//         linkedinElement.style.display = 'none';
//     }
//     const githubElement = document.querySelector('.github') as HTMLElement;
//     if (github) {
//         githubElement.style.display = 'block';
//         const previewGithub = document.getElementById('preview_github') as HTMLAnchorElement;
//         previewGithub.textContent = getDisplayName(github);
//         previewGithub.href = github;
//     } else {
//         githubElement.style.display = 'none';
//     }
//     (document.getElementById('preview_work_experience') as HTMLElement).textContent = workExperience || 'Work Experience...';
//     const educationList = document.getElementById('preview_education') as HTMLElement;
//     educationList.innerHTML = '';
//     education.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         educationList.appendChild(li);
//     });
//     const skillsList = document.getElementById('preview_skills') as HTMLElement;
//     skillsList.innerHTML = '';
//     skills.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         skillsList.appendChild(li);
//     });
// }
// document.getElementById('save_changes')!.addEventListener('click', () => {
//     const name = (document.getElementById('preview_name') as HTMLElement).textContent || '';
//     const email = (document.getElementById('preview_email') as HTMLAnchorElement).textContent || '';
//     const linkedin = (document.getElementById('preview_linkedin') as HTMLAnchorElement).textContent || '';
//     const github = (document.getElementById('preview_github') as HTMLAnchorElement).textContent || '';
//     const workExperience = (document.getElementById('preview_work_experience') as HTMLElement).textContent || '';
//     const education = [...document.querySelectorAll('#preview_education li')].map(item => (item as HTMLElement).textContent || '');
//     const skills = [...document.querySelectorAll('#preview_skills li')].map(item => (item as HTMLElement).textContent || '');
//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('linkedin', linkedin);
//     localStorage.setItem('github', github);
//     localStorage.setItem('work_experience', workExperience);
//     localStorage.setItem('education', JSON.stringify(education));
//     localStorage.setItem('skills', JSON.stringify(skills));
//     alert('Changes saved!');
// });
// window.onload = populatePreview;
// import jsPDF from 'jspdf';
const { jsPDF } = window.jspdf;
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
function openOptionsModal() {
    const modal = document.getElementById('options_modal');
    modal.style.display = 'block';
}
function downloadAsPDF() {
    const doc = new jsPDF();
    const profilePictureURL = document.getElementById('preview_profile_picture').src;
    const name = document.getElementById('preview_name').textContent || '';
    const email = document.getElementById('preview_email').textContent || '';
    const linkedin = document.getElementById('preview_linkedin').textContent || '';
    const github = document.getElementById('preview_github').textContent || '';
    const workExperience = document.getElementById('preview_work_experience').textContent || '';
    const education = [...document.querySelectorAll('#preview_education li')].map(item => item.textContent || '');
    const skills = [...document.querySelectorAll('#preview_skills li')].map(item => item.textContent || '');
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`LinkedIn: ${linkedin}`, 10, 30);
    doc.text(`GitHub: ${github}`, 10, 40);
    doc.text(`Work Experience: ${workExperience}`, 10, 50);
    doc.text('Education:', 10, 60);
    education.forEach((item, index) => doc.text(`- ${item}`, 10, 70 + (10 * index)));
    doc.text('Skills:', 10, 70 + (10 * education.length));
    skills.forEach((item, index) => doc.text(`- ${item}`, 10, 80 + (10 * education.length) + (10 * index)));
    if (profilePictureURL) {
        // Add the profile picture
        doc.addImage(profilePictureURL, 'JPEG', 10, 100, 50, 50);
    }
    doc.save('resume.pdf');
}
function getShareableURL() {
    const baseURL = window.location.href;
    const params = new URLSearchParams({
        name: document.getElementById('preview_name').textContent || '',
        email: document.getElementById('preview_email').textContent || '',
        linkedin: document.getElementById('preview_linkedin').textContent || '',
        github: document.getElementById('preview_github').textContent || '',
        work_experience: document.getElementById('preview_work_experience').textContent || '',
        education: JSON.stringify([...document.querySelectorAll('#preview_education li')].map(item => item.textContent || '')),
        skills: JSON.stringify([...document.querySelectorAll('#preview_skills li')].map(item => item.textContent || ''))
    });
    const shareableURL = `${baseURL}?${params.toString()}`;
    navigator.clipboard.writeText(shareableURL).then(() => {
        alert('Shareable URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy URL:', err);
    });
}
// Event listener for save changes button
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
    openOptionsModal();
});
// Event listeners for options
document.getElementById('download_pdf').addEventListener('click', downloadAsPDF);
document.getElementById('get_url').addEventListener('click', getShareableURL);
// Initialize preview on window load
window.onload = populatePreview;
