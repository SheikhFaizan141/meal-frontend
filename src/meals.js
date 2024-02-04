export async function getMeal(id) {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/meal/${id}`);

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function getMeals(page = null) {
    try {
        const base = 'http://127.0.0.1:8000/api/meal';
        const url = page === null ? base : `${base}?page=${page}`;
        console.log(url);
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return data;

    } catch (error) {
        console.error(error)
    }
}