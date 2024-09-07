document.getElementById("cvForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const profilePicture = document.getElementById("profile_picture").files[0];
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const workExperience = document.getElementById("work_experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    const reader = new FileReader();
    reader.onloadend = function () {
        const profilePicURL = reader.result;
        localStorage.setItem("profile_picture", profilePicURL);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("linkedin", linkedin);
        localStorage.setItem("github", github);
        localStorage.setItem("work_experience", workExperience);
        localStorage.setItem("education", education);
        localStorage.setItem("skills", skills);

        window.location.href = "/cv_preview.html";
    };

    if (profilePicture) {
        reader.readAsDataURL(profilePicture);
    } else {
        localStorage.setItem("profile_picture", "");
        window.location.href = "/cv_preview.html";
    }
});

