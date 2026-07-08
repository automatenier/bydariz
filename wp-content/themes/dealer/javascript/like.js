document.addEventListener("DOMContentLoaded", function() {
    var likeButtons = document.querySelectorAll('.like__btn');

    likeButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            var postId = button.getAttribute('data-post-id');
            var messageDiv = document.getElementById('like-message-' + postId);

            // Tampilkan pesan segera setelah tombol diklik
            messageDiv.textContent = 'Memproses...';
            messageDiv.classList.add('active');
            messageDiv.style.display = 'block';

            // Kirim permintaan AJAX
            var xhr = new XMLHttpRequest();
            xhr.open('POST', ajax_object.ajax_url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);

                        if (response.success) {
                            var likeCountSpan = button.querySelector('.like-count');
                            
                            if (likeCountSpan && likeCountSpan.textContent === '0') {
                                likeCountSpan.remove();
                            }

                            if (!likeCountSpan) {
                                likeCountSpan = document.createElement('span');
                                likeCountSpan.className = 'like-count';
                                button.querySelector('.icon-dealer-heart').insertAdjacentElement('afterend', likeCountSpan);
                            }

                            likeCountSpan.textContent = response.data.likes;
                            messageDiv.textContent = 'Anda menyukai ini !';
                        } else {
                            messageDiv.textContent = response.data || 'Error!';
                        }
                    } else {
                        messageDiv.textContent = 'There was an error.';
                    }

                    setTimeout(function() {
                        messageDiv.style.display = 'none';
                        messageDiv.classList.remove('active');
                    }, 3000);
                }
            };

            xhr.send('action=post_like&post_id=' + postId);
        });
    });
});
