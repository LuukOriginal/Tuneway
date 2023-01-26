export async function loginUser(credentials) {
    return fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(async (data) => {
        return {
            success: data.status === 200,
            body: await data.json()
        }
    })
}

export async function registerUser(credentials) {
    return fetch('http://localhost:3001/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(async (data) => {
        return {
            success: data.status === 201,
            body: await data.json()
        }
    })
}