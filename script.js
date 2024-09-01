//your code here
document.addEventListener("DOMContentLoaded", () => {
    const userImage = document.getElementById('userImage');
    const userName = document.getElementById('userName');
    const infoDisplay = document.getElementById('info');

    const ageBtn = document.getElementById('ageBtn');
    const emailBtn = document.getElementById('emailBtn');
    const phoneBtn = document.getElementById('phoneBtn');
    const getUserBtn = document.getElementById('getUser');

    let currentUser = {};

    async function fetchUser() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];

            currentUser = {
                name: `${user.name.first} ${user.name.last}`,
                image: user.picture.large,
                age: user.dob.age,
                email: user.email,
                phone: user.phone
            };

            displayUserInfo();
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    function displayUserInfo() {
        userImage.src = currentUser.image;
        userName.textContent = currentUser.name;
        infoDisplay.textContent = ''; // Clear additional info display
    }

    ageBtn.addEventListener('click', () => {
        infoDisplay.textContent = `Age: ${currentUser.age}`;
    });

    emailBtn.addEventListener('click', () => {
        infoDisplay.textContent = `Email: ${currentUser.email}`;
    });

    phoneBtn.addEventListener('click', () => {
        infoDisplay.textContent = `Phone: ${currentUser.phone}`;
    });

    getUserBtn.addEventListener('click', () => {
        fetchUser();
    });

    // Fetch initial user on page load
    fetchUser();
});
