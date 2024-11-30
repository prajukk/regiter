document.addEventListener('DOMContentLoaded', function() {
    const likes = document.querySelectorAll('.like');

    likes.forEach(like => {
        like.addEventListener('click', function() {
            let count = parseInt(this.textContent.split(' ')[1]);
            count++;
            this.textContent = `❤️ ${count} likes`;
        });
    });
});