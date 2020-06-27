const micro = require('micro');
const replies = require('./replies');


let question;

const server = micro(async (req, res) => {
  if (req.method !== 'POST') {
    return 'Server is running';
  }

  const { request, session } = await micro.json(req);
  const response = session.new
    ? replies.welcome()
    : checkAnswer(request.command);

  return {
    response,
    version: '1.0'
  };
});

function checkAnswer(command) {
  if (/женский/i.test(command)) {
    question = generateQuestion();
    return replies.firstQuestion(question);
  }
  return replies.answer();
}


const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
