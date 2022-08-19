import FeelingsList from "./FeelingList"; 

const Garfield = () => {
    return (
        <div className="theimage">
            <h1 className="name">REACT</h1>
            <img className="theimage" src="https://www.hollywoodreporter.com/wp-content/uploads/2019/08/garfield_group-publicity-h_2019.jpg?w=1024" alt="" />
            <h3>How does he feel?</h3>
        <FeelingsList />
        </div>
    );
}

export default Garfield;