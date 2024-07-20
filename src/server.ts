import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Example Domain</title>
    </head>
    <body>
      <h1>Example Domain</h1>
      <p>This domain is for use in illustrative examples in documents. You may use this
      domain in literature without prior coordination or asking for permission.</p>
      <p><a href="https://www.iana.org/domains/example">More information...</a></p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Sample website running at http://localhost:${port}`);
});
