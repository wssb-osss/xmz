document.addEventListener('DOMContentLoaded', function () {
    // 双级导航栏的下拉菜单
    const dropdowns = document.querySelectorAll('.navbar ul li ul.dropdown');
    dropdowns.forEach(dropdown => {
        const parentLi = dropdown.parentElement;
        parentLi.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        parentLi.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
    });

    // 动态显示当前时间
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        if (currentTimeElement) {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            currentTimeElement.textContent = '当前时间：' + formattedTime;
        }
    }

    setInterval(updateTime, 1000);
    updateTime();

    // 音乐播放器控制：确保自动播放
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.play().catch(error => {
            console.log('自动播放被阻止：', error);
        });

        audioPlayer.addEventListener('play', function () {
            console.log('音乐播放开始');
        });

        audioPlayer.addEventListener('pause', function () {
            console.log('音乐播放暂停');
        });
    }

    // "我想说"按钮和密码验证
    const saySomethingBtn = document.getElementById('say-something-btn');
    const passwordModal = document.getElementById('password-modal');
    const friendModal = document.getElementById('friend-modal');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmitBtn = document.getElementById('password-submit-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    if (saySomethingBtn && passwordModal && friendModal && passwordInput && passwordSubmitBtn) {
        saySomethingBtn.addEventListener('click', () => {
            passwordModal.style.display = 'block';
            passwordInput.focus();
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                passwordModal.style.display = 'none';
                friendModal.style.display = 'none';
                passwordInput.value = '';
            });
        });

        passwordSubmitBtn.addEventListener('click', () => {
            if (passwordInput.value === 'xyf') {
                passwordModal.style.display = 'none';
                friendModal.style.display = 'block';
                passwordInput.value = '';
            } else {
                passwordInput.value = '';
                alert('密码错误，请重试！');
            }
        });

        // 点击外部区域关闭弹窗
        window.addEventListener('click', function (event) {
            if (event.target == passwordModal) {
                passwordModal.style.display = 'none';
                passwordInput.value = '';
            }
            if (event.target == friendModal) {
                friendModal.style.display = 'none';
            }
        });
    }
});
