const fetchTutorials = async () => {
    try {
        const response = await fetch('http://localhost:2121/tutorials', {
            method: 'GET', // Pastikan metode sesuai
            headers: {
                'Content-Type': 'application/json',  // Jika server mengharapkan JSON
                'api-key': 'CAPSTONE-TRASHUP-API-KEY-12345678'  // Pastikan API Key terkirim
            },
            // mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Kembalikan data yang di-fetch
    } catch (error) {
        console.error('Error fetching tutorials:', error);
        throw error; // Lempar ulang error untuk penanganan lebih lanjut
    }
};

const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:2121/admin/users?adminKey=CAPSTONE-TRASHUP-ADMIN-API-KEY-12345678', {
            method: 'GET', // Pastikan metode sesuai
            headers: {
                'Content-Type': 'application/json',  // Jika server mengharapkan JSON
                'api-key': 'CAPSTONE-TRASHUP-API-KEY-12345678'  // Pastikan API Key terkirim
            },
            // mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Kembalikan data yang di-fetch
    } catch (error) {
        console.error('Error fetching tutorials:', error);
        throw error; // Lempar ulang error untuk penanganan lebih lanjut
    }
};

export { fetchTutorials, fetchUsers };