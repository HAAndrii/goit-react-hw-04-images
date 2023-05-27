import axios from 'axios';

async function FethImages(searchQuery, per_page, page) {
  try {
    const APIkey = '34956958-607174b7a3dcac6d349ccda16';

    const param = new URLSearchParams({
      key: APIkey,
      //q: 'yellow+key',
      q: searchQuery,
      orientation: 'horizontal',
      image_type: 'photo',
      safesearch: 'true',
      per_page: per_page,
      page: page,
    });

    const responce = await axios.get(`https://pixabay.com/api/?${param}`);

    // console.log('responce', responce);

    if (!responce.status === 200) {
      throw new Error(responce.status);
    }

    return await responce.data;
  } catch (error) {
    console.log(error);
  }
}

export default FethImages;
