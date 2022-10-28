const Home = () => {

    const handleClick = (e) => {
        console.log('Clicked', e);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;