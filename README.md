# 🌪️ CineTrack

A premium, luxury UI/UX web application built for exploring electronic games, movies, and TV shows. This project focuses on high-performance data fetching, seamless animations, and an optimized user experience using modern frontend technologies.

---

## 🚀 Features & Technical Highlights

* **Smart Multi-Search:** Integrated TMDB `search/multi` to allow users to search for both movies and TV shows simultaneously with real-time feedback.
* **Dynamic Parallel Fetching:** Leveraged JavaScript's `Promise.all` to fetch bulk custom watchlists/wishlists concurrently, slashing network latency.
* **Polymorphic API Handling:** Solved TMDB's ID overlap issue by building a dual-fetch fallback mechanism that injects `media_type` (`movie` vs `tv`) dynamically into data objects before rendering.
* **Reactive State & Caching:** Utilized **React Query (`@tanstack/react-query`)** with highly optimized array-dependent `queryKey` tracking to handle immediate UI state sync upon adding/removing items from wishlists.
* **Premium Animations:** Integrated `motion/react-client` (Framer Motion) for fluid, client-side entry animations and rich interactive micro-interactions.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **State Management & Fetching:** React Query / TanStack Query
* **Styling:** Tailwind CSS (Luxury Dark Theme Aesthetic)
* **Animation:** Framer Motion (`motion/react-client`)
* **Database & Storage:** Client-side local management synced with internal state / hooks.
* **API Provider:** TMDB (The Movie Database)

---

## ⚙️ Core Architecture Snippets

### 1. Smart Polymorphic Data Fetching
This custom utility fetches mixed IDs efficiently, detecting whether the saved ID belongs to a movie or a TV show without relying on hardcoded types in the database:

```typescript
const getDetails = async (id: number) => {
  try {
    // 1. Try fetching as a Movie
    const res = await fetch(`${APIURL}/movie/${id}?language=en-US`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_TOKEN_AUTH!,
      },
    });

    if (res.ok) {
      const response = await res.json();
      // Inject media_type inside the returned response object
      return { data: { ...response, media_type: "movie" } };
    }

    // 2. Fallback: Try fetching as a TV Show
    const res2 = await fetch(`${APIURL}/tv/${id}?language=en-US`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_TOKEN_AUTH!,
      },
    });

    if (res2.ok) {
      const response = await res2.json();
      // Inject media_type inside the returned response object
      return { data: { ...response, media_type: "tv" } };
    }

    return null;
  } catch (error) {
    console.error(`Error in Get Item ${id}:`, error);
    return null;
  }
};