export async function getMeal(id) {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/meal/${id}`);

        if (!res.ok) {
            throw new Response("", {
                status: res.status,
                statusText: res.statusText,
            });
        }

        return await res.json();
    } catch (error) {
        console.error(error)
    }
}

export async function getMeals(page = null) {
    const base = 'http://127.0.0.1:8000/api/meal';
    const url = new URL(page === null ? base : `${base}?page=${page}`);

    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Response("", {
                status: res.status,
                statusText: res.statusText,
            });
        }

        return await res.json();
    } catch (error) {
        console.error(error)
    }
}