

export const getFoodItemForLandingPage = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BE_URL}/foodItems`)

    if (!res.ok) {
      throw new Error("Failed to fetch food categories")
    }

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}



export const getFoodCategories = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BE_URL}/foodCategories`)

    if (!res.ok) {
      throw new Error("Failed to fetch food categories")
    }

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}


export const getRestaurantsByCategory = async (foodCategoryId) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BE_URL}/restaurants?foodCategoryId=${foodCategoryId}`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch restaurants by foodCategory")
    }

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}


export const getAllRestaurants = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BE_URL}/restaurants`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch restaurants")
    }

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}