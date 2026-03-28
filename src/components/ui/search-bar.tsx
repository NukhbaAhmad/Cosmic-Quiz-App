'use client'

interface SearchbarProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
  loading: boolean
  placeholder: string
}

export const Searchbar = ({ value, onChange, onSearch, loading, placeholder }: SearchbarProps) => (
  <div className="flex gap-3 pt-10 max-w-2xl mx-auto w-full">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      className="flex-1  py-2 px-4 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 font-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
    />
    <button
      onClick={onSearch}
      disabled={loading}
      className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl active:shadow-md hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
    >
      Search
    </button>
  </div>
)
