import MealCard from '../components/MealCard'
import { Link, useLoaderData } from "react-router-dom"

async function getMeals() {
    try {
        const res = await fetch("/meals.json");

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return data?.meals ?? [];

    } catch (error) {
        console.error(error)
    }
}

export async function loader() {
    const meals = await getMeals();

    console.log(meals);
    return { meals }
}

export default function Index() {
    const { meals } = useLoaderData();

    return (
        <div className="container meal-container">
            <div className="search-bar ma-search-bar">
                
            </div>
            <div className="meal-wrapper">
                {
                    meals.map(meal => {
                        return (
                            <div key={meal.id} className="card meal-card">
                                <Link  to={`meal/${meal.id}`}>
                                    <MealCard name={meal.name} desc={meal.description} url={meal.img}/>

                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
