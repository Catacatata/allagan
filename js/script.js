
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

async function fetchTableData() {
    try {
        // Replace with the raw URL to your JSON file in the GitHub repository
        const response = await fetch('https://allagan.top/data.json');
        const data = await response.json();
        generateTable(data);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

function generateTable(data) {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    data.forEach(row => {
        const tr = document.createElement("tr");

        Object.values(row).forEach(cellData => {
            const td = document.createElement("td");
            td.textContent = cellData;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

// Fetch and generate the table on page load
fetchTableData();