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
    return new Promise((res) => {
      setTimeout(() => {
        res(this.data);
      }, 700)
    })
  }
}
