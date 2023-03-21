import { create } from 'zustand'

interface RepositoryFavorite {
  favoriteReposId: number[]
  addRepoToFavorites: (repoId: number) => void
  removeRepoFromFavorites: (repoId: number) => void
}

export const useFavoriteRepoStore = create<RepositoryFavorite>((set) => {
  return {
    favoriteReposId: [],

    addRepoToFavorites: (repoId: number) => {
      set((state) => ({
        favoriteReposId: [...state.favoriteReposId, repoId],
      }))
    },

    removeRepoFromFavorites: (repoId: number) => {
      set((state) => ({
        favoriteReposId: state.favoriteReposId.filter((id) => id !== repoId),
      }))
    },
  }
})
