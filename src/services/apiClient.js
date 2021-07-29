const apiClient = {
  getHomes: async () => {
      const response = await fetch('https://run.mocky.io/v3/62de12a6-dce1-4b9c-a34c-c77e275df98a');
        return await response.json();
    // return Promise.resolve([]);
  },
};

export default apiClient;
