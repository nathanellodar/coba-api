export function deleteTutorial(id) {
        const response = fetch('http://localhost:2121/admin/removeTutorial?adminKey=CAPSTONE-TRASHUP-ADMIN-API-KEY-12345678&&id=' + id, {
            method: 'POST', // Pastikan metode sesuai
            headers: {
                'Content-Type': 'application/json',  // Jika server mengharapkan JSON
                'api-key': 'CAPSTONE-TRASHUP-API-KEY-12345678'  // Pastikan API Key terkirim
            },
            // body: JSON.stringify({ id }),
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = response.json();
        return data; // Kembalikan data yang di-fetch
};

//     const url = "http://localhost:2121/admin/deleteTutorial?adminKey=CAPSTONE-TRASHUP-ADMIN-API-KEY-12345678&id=" + id
//     fetch(url, {method: "DELETE"}).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
// }