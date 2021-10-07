import './App.css';

function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    );
}
function Main(props) {
    return (
        <section>
            <h2>Experience: Andreea's {props.adjective}</h2>
            <img
                src="https://github.com/andreeagutin.png"
                height="200"
                alt="Andreea Gutin's website"
            />
            <ul style={{ textAlign: "left" }}>
                {props.companies.map((company, i) => (
                    <li key={company.id}>{company.title}</li>
                ))}
            </ul>
        </section>
    );
}
function Footer(props) {
    return (
        <footer>
            <h3>Copyright {props.year}</h3>
        </footer>
    );
}

const companies = [
    "Medidata Solutions",
    "Tagident",
    "BosmanGgz",
    "AlienConcept"
];

const companiesObjects = companies.map((company, i) => ({ id: i, title: company }));

function App() {
    return (
        <div className="App">
            <Header name="Andreea Gutin" />
            <Main adjective="blog" companies={companiesObjects} />
            <Footer year={new Date().getFullYear()} />
        </div>
    );
}

export default App;
