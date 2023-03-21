import { Star } from '@phosphor-icons/react'

import styles from './styles.module.css'

interface RepositoryProps {
  name: string
  isFavorite: boolean
  id: number
  handleAddRepoToFavorites: (id: number) => void
  handleRemoveRepoFromFavorites: (id: number) => void
}

export function Repository(props: RepositoryProps) {
  function handleFavoriteRepo() {
    props.handleAddRepoToFavorites(props.id)
  }

  function handleRemoveFavoriteRepo() {
    props.handleRemoveRepoFromFavorites(props.id)
  }

  return (
    <div className={styles.repositoryContainer}>
      <strong>{props.name}</strong>

      {props.isFavorite ? (
        <button title="Remover de favoritos" onClick={handleRemoveFavoriteRepo}>
          <Star size={22} weight="fill" />
        </button>
      ) : (
        <button title="Favoritar" onClick={handleFavoriteRepo}>
          <Star size={22} weight="regular" />
        </button>
      )}
    </div>
  )
}
