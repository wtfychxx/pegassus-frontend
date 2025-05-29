const apiUrl = process.env.API_URL

export const loginAccount = async (email: string, password: string) => {
  const requestBody = { email, password }

  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const result = await response.json() // Ambil response JSON lebih awal

    if (!response.ok) {
      throw new Error(
        result.message || `HTTP error! Status: ${response.status}`,
      )
    }

    return result
  } catch (error) {
    console.error('Error posting data:', error)
    throw error // Pastikan error dilempar agar bisa ditangkap di frontend
  }
}
