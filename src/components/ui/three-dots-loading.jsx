const ThreeDotsLoading = ({ description }) => {
  return (
    <div class="flex items-center justify-center space-x-2 bg-white dark:invert">
      <span className="text-white">{description}</span>
      <span class="sr-only">{description}...</span>
      <div class="h-2 w-2 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
      <div class="h-2 w-2 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
      <div class="h-2 w-2 animate-bounce rounded-full bg-black"></div>
    </div>
  )
}

export default ThreeDotsLoading
