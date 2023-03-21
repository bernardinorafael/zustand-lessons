import { useCallback } from 'react'

import { Loader } from './components/Loader'
import { Repository } from './components/Repository'
import styles from './css/app.module.css'
import useFetchRepos from './queries/repos'
import { useFavoriteRepoStore } from './store/useFavoriteRepos'

import './css/global.css'

export function App() {
  const { data, isLoading } = useFetchRepos()

  const favoriteReposId = useFavoriteRepoStore((state) => state.favoriteReposId)

  const addRepoToFavorites = useFavoriteRepoStore(
    (state) => state.addRepoToFavorites,
  )

  const removeRepoFromFavorites = useFavoriteRepoStore(
    (state) => state.removeRepoFromFavorites,
  )

  const handleAddRepoToFavorites = useCallback(
    (repoId: number) => addRepoToFavorites(repoId),
    [addRepoToFavorites],
  )

  const handleRemoveRepoFromFavorites = useCallback(
    (repoId: number) => removeRepoFromFavorites(repoId),
    [removeRepoFromFavorites],
  )

  return (
    <main className={styles.container}>
      <h1>
        Aplicação com intuito de treinar conhecimentos na biblioteca{' '}
        <a
          href="https://github.com/pmndrs/zustand"
          target="_blank"
          rel="noreferrer"
        >
          Zustand
        </a>
      </h1>

      <section className={styles.repositoriesBox}>
        {favoriteReposId.length > 0 ? (
          <h2>Favoritos: {favoriteReposId.length}</h2>
        ) : null}

        {!isLoading ? (
          data.map((repo: any) => {
            return (
              <Repository
                handleAddRepoToFavorites={handleAddRepoToFavorites}
                handleRemoveRepoFromFavorites={handleRemoveRepoFromFavorites}
                id={repo.id}
                isFavorite={favoriteReposId.includes(repo.id)}
                key={repo.id}
                name={repo.name}
              />
            )
          })
        ) : (
          <Loader />
        )}
      </section>
    </main>
  )
}
