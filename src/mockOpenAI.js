export default async function mockOpenAIChatCompletion(data) {
  if (data.messages.at(-1).content.toLowerCase().includes('write a function')) {
    return {
      choices: [
        {
          message: {
            role: 'assistant',
            content: "Here's a function in JavaScript:\n\nfunction add(a, b) { return a + b; }",
          },
        },
      ],
    };
  }

  return {
    choices: [
      {
        message: {
          role: 'assistant',
          content: "Here's a code review result",
        },
      },
    ],
  };
}
