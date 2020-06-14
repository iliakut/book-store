export default class BookStoreService {
  data = [
    {
      id: 1,
      title: 'Product ready Microservices',
      author: 'Susan',
      price: 32
    },
    {
      id: 2,
      title: 'Release it',
      author: 'Michael Nygard',
      price: 45
    },
  ];

  getBooks() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          rej(new Error('Something wrong'))
        }
        res(this.data);
      }, 700)
    })
  }
}
