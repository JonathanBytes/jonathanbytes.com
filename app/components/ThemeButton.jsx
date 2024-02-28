const ThemeSwitchButton = ({ children, onClick, isSelected }) => {
  return (
    <button
      type="button"
      className={`text-background p-1 w-8 h-8 aspect-square rounded-lg transition-colors duration-300
                  ${isSelected ? 'bg-primary text-text dark:text-background' :
          'hover:bg-primary hover:text-text dark:hover:text-background bg-text'} `}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default ThemeSwitchButton
