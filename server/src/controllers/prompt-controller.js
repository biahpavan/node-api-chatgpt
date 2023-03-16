const inputPrompt = require("../model/input-prompt")
const openai = require("../config/openai")

module.exports = {
  async sendText(request, response) {

    const openaiAPI = openai.configuration()
    const inputModel = new inputPrompt(request.body)

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel)
      )

      return response.status(200).json({
        success: true,
        data: response.data.choices[0].text
      })

    } catch (error) {
      return response.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : 'There was an inssue on the server'
      })
    }
  }
}