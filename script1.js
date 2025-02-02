document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const role = document.getElementById('role').value;
    const phone = document.getElementById('phone').value;
    const status = document.getElementById('status').value;
    
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
        <div class="lis">
            <p><strong>${name}</strong></p>
            <p> Role: ${role}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Course: ${course}</p>
            <p>Status: ${status}</p>
            <button class="delete-btn">Delete</button>
        </div>
        
    `;
    
    document.getElementById('user-list').appendChild(userCard);
    
    userCard.querySelector('.delete-btn').addEventListener('click', function() {
        userCard.remove();
    });
    
    document.getElementById('user-form').reset();
});