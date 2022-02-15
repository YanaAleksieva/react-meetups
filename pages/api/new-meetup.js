// /api/new-meetup - if request send to this URL, it will trigger function defined below

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
