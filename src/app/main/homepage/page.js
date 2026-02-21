import CardList from "./components/cardlist";

export default function Page () {
    return (
        <main>
            <h1 style={{ textAlign: "center", marginTop: "20px"}}>
                ImageCard Card Gallery
            </h1>

            <CardList/>
        </main>
    );
}