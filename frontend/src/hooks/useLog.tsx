/**
 * Sends log to the server
 */
const useLog = async (message: string) => {
  try {
    const response = await fetch('http://localhost:8000/log', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message })
    })

    console.log(response)

  } catch (error) {
    console.log(error)
  }
}

export default useLog
