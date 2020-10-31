class Http {
  static instance = new Http();

  get = async (uri) => {
    try {
      let req = await fetch(uri);
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http error is', error);
      throw new Error(error);
    }
  };

  post = async (uri, body) => {
    try {
      let req = await fetch(uri, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (err) {
      console.log('http error is', err);
      throw new Error(err);
    }
  };
}

export default Http;
