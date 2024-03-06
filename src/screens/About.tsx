import styled from "styled-components";

const AboutSpan = styled.div`
    width: 80%;
    text-align: center;
    color: cadetblue;
`;


function About() {
    return (
    <div>
        <h1>About</h1>
        <AboutSpan>Kyobo Book Centre was first established by its founding company, "Kyobo Moon-go Corporation", in December 1980. After six months, the first store opened in June 1981. It was built under the headquarters of its parent company, Kyobo.
            The central location, with its address at 1 Jong-ro (Jongno 1-ga), enabled the site to receive much enthusiasm from readers, bringing much needed life into a depressed publishing industry. 
            It underwent major renovations in 1991, to enlarge its property underground to approximately 9,000m². Its total length of leadways and passageways amounted up to 25 km. The Gwanghwamun Store is famous for its entrances, 
            particularly the main entrance that one takes from Jongno 3-ga. Whereby before climbing the stairs to the heavy gate-doors, one can read in clear old-style Korean,
            across the outer wall of the passageway: "People create books, and books create people". When entering the passageway, one notices the famous Nobel laureates of the world,
            including Korean recipient of the Nobel Peace Prize, late former president Kim Dae-jung. An empty board exists for any future Korean Nobel laureate. 
            It houses around 2.3 million volumes. Together with the enormous book store, 
            it also has the "Hot Tracks" store, where a huge collection of music CDs and DVDs are sold. 
            With this, there is also a huge stationery store, together with office ware and decorative products.
        </AboutSpan>
    </div>
    )
}

export default About;