const URL = `https://chatument-waitlist-backend-p96bj.ondigitalocean.app/waitlist`;

export const postEmail = async (email) => {
  try {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    });
  } catch (err) {
    console.log(err);
  }
};
