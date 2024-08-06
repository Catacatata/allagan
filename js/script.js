
document.getElementById('noharmed').addEventListener('click', function() {
    // 这里可以添加播放音频或视频的代码
    // 例如播放一个音频文件
    var audio = new Audio('./media/noharmed.wav');
	audio.volume = 0.8; // 设置音量，范围从 0.0（静音）到 1.0（最大音量）
    audio.play();
});

document.getElementById('vptest').addEventListener('click', function() {
    // 这里可以添加播放音频或视频的代码
    // 例如播放一个音频文件
    var audio = new Audio('./media/vptest.wav');
	audio.volume = 0.8; // 设置音量，范围从 0.0（静音）到 1.0（最大音量）
    audio.play();
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            updateTable('tab1-table', data.tab1);
            updateTable('tab2-table', data.tab2);
        })
        .catch(error => console.error('Error loading JSON:', error));

    function updateTable(tableId, data) {
        let tableBody = document.querySelector(`#${tableId} tbody`);
        tableBody.innerHTML = ""; // 清空表格内容

        data.forEach(item => {
            let row = document.createElement('tr');

            let nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            row.appendChild(nameCell);

            let ageCell = document.createElement('td');
            ageCell.textContent = item.age;
            row.appendChild(ageCell);

            let emailCell = document.createElement('td');
            emailCell.textContent = item.email;
            row.appendChild(emailCell);

            tableBody.appendChild(row);
        });
    }

    document.querySelectorAll('.tabs .btn').forEach(tabButton => {
        tabButton.addEventListener('click', function() {
            document.querySelectorAll('.tabs .btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.id.replace('-button', '')).classList.add('active');
        });
    });
});

