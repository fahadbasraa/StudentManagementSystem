const button = document.getElementById('btn-forget');

// Add a click event to open a new page
button.addEventListener('click', () => {
    window.open('newpassword.html', '_blank'); // URL and target
});

function showMainPage(role) {
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else if (role === 'faculty') {
        window.location.href = 'faculty.html';
    } else if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'parent') {
        window.location.href = 'parent.html';
    }
}
