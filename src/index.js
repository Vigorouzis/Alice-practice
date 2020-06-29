const micro = require('micro');
const replies = require('./replies');


const server = micro(async (req, res) => {
  if (req.method !== 'POST') {
    return 'Server is running';
  }

  const {request, session} = await micro.json(req);
  const response = session.new
    ? replies.welcome()
    : checkAnswer(request.command);

  return {
    response,
    version: '1.0'
  };
});

function checkAnswer(command) {
  if (/(?:\b|-)([1-9]{1,2}[0]?|100)\b/g.test(command) && /женский/i.test(command)) {
    return replies.firstQuestion();
  }
  if (/(?:\b|-)([1-9]{1,2}[0]?|100)\b/g.test(command) || /да/i.test(command)) {
    return replies.secondQuestion();
  }
  if (/#^[0-9]+$#/g.test(command)) {
    return replies.thirdQuestion();
  }
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));
