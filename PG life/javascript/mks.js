componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const city_name = params.get('city');
 
    fetch(`${base_path}/api/get_properties_by_city.php?city=${city_name}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          properties: responseData
        });
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
}