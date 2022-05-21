import type { FC } from "react"

interface SearchBarProps {
  placeholder?: string
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder = "キーワード検索",
}) => {
  return (
    <form action="/search" className="flex justify-center input-group">
      <input
        type="text"
        name="text"
        required
        placeholder={placeholder}
        className="w-full max-w-sm input input-bordered"
      />
      <input name="page" value={1} className="hidden" />
      <button type="submit" className="btn btn-square btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  )
}
