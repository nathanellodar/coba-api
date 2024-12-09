export const login = async (email_user, password_user) => {
  console.log(email_user, password_user);

  try {
    const response = await fetch('http://localhost:2121/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'CAPSTONE-TRASHUP-API-KEY-12345678',
      },
      body: JSON.stringify({ email_user, password_user }),
      mode: "cors"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response from server:', data);
    return data; // Kembalikan data untuk diproses di komponen
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Lempar error untuk ditangani di komponen
  }
};
