

export const getFoodItemForLandingPage = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BE_URL}/foodItems`)

    if (!res.ok) {
      throw new Error("Failed to fetch food categories")
    }

    const data = await res.json()
    
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


export const getRestaurantsByCity = async (city) => {

  const res = await fetch(`${import.meta.env.VITE_BE_URL}/restaurants?city=${city}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants by city");
  }

  return await res.json()
}

export const getTopRatedRestaurants = async (rating = 4.5) => {
  const res = await fetch(
    `${import.meta.env.VITE_BE_URL}/restaurants?minRating=${rating}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top rated restaurants")
  }

  return await res.json()
}

export const getAllRestaurantsWithLimit = async (page = 1, limit = 9) => {
  const res = await fetch(
    `${import.meta.env.VITE_BE_URL}/restaurants?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return await res.json()
}

export const getRestaurantById = async (restaurantId) => {
  const res = await fetch(`${import.meta.env.VITE_BE_URL}/restaurants/${restaurantId}`)

  if (!res.ok) {
    throw new Error("Failed to fetch menu cards")
  }

  const data=await res.json()

  return data;
}

export const getMenuCardsByRestaurantId = async (restaurantId) => {
  const res = await fetch(`${import.meta.env.VITE_BE_URL}/menuCards?restaurantId=${restaurantId}`)

  if (!res.ok) {
    throw new Error("Failed to fetch menu cards")
  }

  const data=await res.json()

  return data;
}


export const getOfferRestaurants = async (page = 1, limit = 9) => {
  const res = await fetch(
    `${import.meta.env.VITE_BE_URL}/restaurants?hasOffer=true&page=${page}&limit=${limit}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch offer restaurants")
  }

  return await res.json()
}

export const searchRestaurants = async (searchText) => {
  const res = await fetch(
    `${import.meta.env.VITE_BE_URL}/restaurants?search=${searchText}`)

  if (!res.ok) {
    throw new Error("Failed to search restaurants")
  }

  return await res.json()
}