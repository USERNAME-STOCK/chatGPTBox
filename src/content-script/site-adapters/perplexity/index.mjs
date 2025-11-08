export default {
  inputQuery: async () => {
    // Get the main query/search input
    const query =
      document.querySelector('[placeholder*="Ask anything"]')?.value ||
      document.querySelector('textarea')?.value ||
      document.querySelector('[role="textbox"]')?.textContent

    // Get the main content/answer area
    const answer =
      document.querySelector('[class*="answer"]')?.textContent ||
      document.querySelector('[class*="response"]')?.textContent ||
      document.querySelector('main')?.textContent

    if (query && answer) {
      return `Analyze this Perplexity search and response:\n\nQuery: ${query}\n\nResponse: ${answer}`
    } else if (query) {
      return `Analyze this Perplexity query: ${query}`
    } else if (answer) {
      return `Summarize this Perplexity response:\n${answer}`
    }

    return `Summarize the content on this Perplexity page.`
  },
}
