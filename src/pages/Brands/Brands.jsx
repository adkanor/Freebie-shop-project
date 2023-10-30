import React, { useState, useEffect, useRef } from "react";
import styles from "./Brands.module.css";

const brandImage1 = "https://i.ibb.co/BV7y1Qr/1-Valentino.png";
const brandImage2 = "https://i.ibb.co/8DwfTVW/1Zara.png";
const brandImage3 = "https://i.ibb.co/ctgM0Hh/1Kenzo.png";
const brandImage4 = "https://i.ibb.co/2kz8SPX/1-Phillip-Plein.png";
const brandImage11 = "https://i.ibb.co/jMcppQw/1-Marc-O-Polo.png";
const brandImage6 = "https://i.ibb.co/10QxXR1/1-Givenchy.png";
const brandImage5 = "https://i.ibb.co/7Rm3YZT/1Versace.png";
const brandImage8 = "https://i.ibb.co/QDwbx6S/1Prada.png";
const brandImage9 = "https://i.ibb.co/4dcKQ2M/1-The-North-Face.png";
const brandImage10 = "https://i.ibb.co/8NkGLTs/1-Tommy-Hilfiger.png";
const brandImage7 = "https://i.ibb.co/fnYdVvG/1-Dolce-Gabbana.png";
const brandImage12 = "https://i.ibb.co/Ks9crBb/1-Michael-Kors.png";
const brandImage13 = "https://i.ibb.co/FKZC9B6/1-Ralph-Lauren.png";
const brandImage14 = "https://i.ibb.co/tBCKSZf/1-Jil-Sander.png";

const Brands = () => {
    const brandImages = [brandImage1, brandImage2, brandImage3, brandImage4, brandImage5, brandImage6, brandImage7, brandImage8, brandImage9, brandImage10, brandImage11, brandImage12, brandImage13, brandImage14];
    const imagesWithDuplications = [...brandImages, ...brandImages];
    const brandsStartingWithA = [
        "A.Testoni",
        "Adidas",
        "Adidas Yeezy",
        "Adriano Goldschmied",
        "Aeronautica Militare",
        "After Label",
        "AGF Marostica",
        "Airboss",
        "Albano",
        "Alberto Gozzi",
        "Alberto Guardiani",
        "Aldo Brue",
        "Alessandro Dell'acqua",
        "Alexander McQueen",
        "Alexander Wang",
        "Alexandre Vauthier",
        "Alexis",
        "Alpina",
        "Ambra",
        "Andre Tan",
        "Antica Sartoria",
        "Antony Morato",
        "Aquascutum",
        "Aquilano Rimondi",
        "Arena",
        "Armani",
        "Armata di Mare",
        "Arzoni Bazalini",
        "Asics",
        "Atoir",
        "Aubade",
        "Automobili Lamborghini",
        "Avecs"
    ];
    const brandsStartingWithB = [
        "Bado",
        "Baldinini",
        "Balenciaga",
        "Ballin",
        "Bally",
        "Balmain",
        "Balossa",
        "Barbara Schwarzer",
        "Barracuda",
        "Barrett",
        "Basconi",
        "Bastille",
        "BEARPAW",
        "Beatrice",
        "Berwich",
        "Billionaire",
        "Bip-Bip",
        "Blanca Luz",
        "Blauer",
        "Blumarine",
        "Bogner",
        "Bolon",
        "Bomboogie",
        "Bosideng",
        "Bottega Veneta",
        "Brax",
        "Brecos",
        "Brunate",
        "Bugatti",
        "Burberry",
        "Byblos"
    ];
    const brandsStartingWithC = [
        "Cafe Noir",
        "Calvin Klein",
        "Camel Active",
        "Camerlengo",
        "Canada Goose",
        "Carl Gross",
        "Casadei",
        "Cashmere Company",
        "Celine",
        "Cerruti 1881",
        "Cesare Attolini",
        "Cesare Paciotti",
        "Chiara Ferragni",
        "Chloe",
        "Christian Dior",
        "Clips",
        "CMP",
        "Coach",
        "Coccinelle",
        "Colmar",
        "Columbia",
        "Comme des Fuckdown",
        "Corneliani",
        "Cortigiani",
        "Costume National",
        "Creazioni C.R.B",
        "Current Elliott",
    ];

    const brandsStartingWithD = [
        "Damien",
        "Daniela Fargion",
        "Daniele Fiesoli",
        "Di Gregorio",
        "Didier Parakian",
        "Diego M",
        "Diesel",
        "Digel",
        "Dirk Bikkembergs",
        "Dita von Teese",
        "Dolce & Gabbana",
        "Dondup",
        "Donna Karan",
        "Donna Soft",
        "Doucal's",
        "Dsquared2",
        "Duno",
        "Dyva",
    ];

    const brandsStartingWithE = [
        "Eddy Daniele",
        "Elbrus",
        "Eleonora Pacolli",
        "Elisabetta Franchi",
        "Enrico Coveri",
        "Ermanno Scervino",
        "Ermenegildo Zegna",
        "Escada",
        "Exte",
    ];

    const brandsStartingWithF = [
        "Fabi",
        "Faith Connexion",
        "Falke",
        "Fendi",
        "Ferrante",
        "Firenze Italy",
        "Franco Riveiro",
        "Frankie Morello",
        "Fratelli Rossetti",
        "Fred Mello",
        "Fru.It",
        "Furla",
    ];

    const brandsStartingWithG = [
        "G.Lupo",
        "Gant",
        "GCDS",
        "GD Cashmere",
        "Geospirit",
        "Giampaolo Viozzi",
        "Giampiero Nicola",
        "Gianfranco Butteri",
        "Gianfranco Ferre",
        "Gianni Renzi",
        "Giannico",
        "Giorgio Fabiani",
        "Gioseppo",
        "Giovanni Ciccioli",
        "Giovanni Fabiani",
        "Givenchy",
        "Globe Trotter",
        "Good Man",
        "Gran Sasso",
        "Gucci",
        "Guess",
        "Guglielmo Rotta",
        "Gutteridge",
    ];
    const brandsStartingWithH = [
        "Halmanera",
        "Harmont & Blaine",
        "Helena Soretti",
        "Hemisphere",
        "Henderson Baracco",
        "Herno",
        "Heron Preston",
        "Hestia Venezia",
        "Hi-Tec",
        "Hiltl",
        "Hogan",
        "Holy Caftan",
        "Hugo Boss",
    ];

    const brandsStartingWithI = [
        "Iceberg",
        "Iguana",
        "Ilasio Renzoni",
        "Ilvi",
        "Invicta",
        "Isabelle Blanche",
        "Italia Independent",
    ];

    const brandsStartingWithJ = [
        "J.B4 Just Before",
        "Jack Wolfskin",
        "Jacob Cohen",
        "Jeannot",
        "Jil Sander",
        "Jimmy Choo",
        "John Galliano",
        "John Richmond",
        "Joop!",
    ];

    const brandsStartingWithK = [
        "Kanna",
        "Karl Lagerfeld",
        "Kate Spade",
        "Keen",
        "Kelton",
        "Kenzo",
        "Ko Samui",
        "Kocca",
        "Kontatto",
    ];

    const brandsStartingWithL = [
        "La Badia",
        "La Belle",
        "La Perla",
        "Lab Milano",
        "Lancaster",
        "Lanvin",
        "Lardini",
        "Laura Bellariva",
        "Le Berdes",
        "Le Coq Sportif",
        "Le Silla",
        "Left and Right",
        "Lempelius",
        "Les Hommes",
        "LEstrosa",
        "Levi's",
        "LingaDore",
        "Liu Jo",
        "Loriblu",
        "Loro Piana",
        "Luca Guerrini",
        "Ludovica Mascheroni",
        "Luigi Traini",
        "Lumberjack",
        "Luna Di Giorno",
    ];

    const brandsStartingWithM = [
        "Maerz",
        "Magistral",
        "Magnum",
        "Malloni",
        "Malo",
        "Mangano",
        "Manuel Ritz",
        "Manul",
        "Marc Jacobs",
        "Marc O'Polo",
        "Marcelo Burlon",
        "Marchesa Notte",
        "Marco Bologna",
        "Marella",
        "Maria Moro",
        "Mariella Rosati",
        "Marina Creazioni",
        "Marina Militare",
        "Marina Yachting",
        "Marino Fabiani",
        "Mario Bruni",
        "Marsell",
        "Martes",
        "Marville",
        "Mary Claud",
        "Marzetti",
        "Maurizio",
        "Max Mara",
        "Mazzoleni",
        "Mc2 Saint Barth",
        "Medea",
        "Menghi",
        "Michael Coal",
        "Michael Kors",
        "Mimi Liberte",
        "MISBHV",
        "Miss Sixty",
        "Missoni",
        "MLLE BB",
        "MM6",
        "Moncler",
        "Montecore",
        "Moreschi",
        "Moschino",
        "Mot-Cle",
        "Mr. Dodo",
        "MSGM",
        "MVP Wardrobe",
    ];

    const brandsStartingWithN = [
        "N21",
        "Nana Nucci",
        "Nando Muzi",
        "Napoleoni",
        "NASA",
        "Natasha Zinko",
        "Navigare",
        "Neil Barrett",
        "Neous",
        "Nero Giardini",
        "New Balance",
        "Nike",
        "Nila&Nila",
        "Nissa",
        "NIU",
        "No Secrets",
        "Norah",
        "Norma J. Baker",
        "Not Shy",
        "NOW",
        "Nudie Jeans",
    ];

    const brandsStartingWithO = [
        "Off-White",
        "Officine Creative",
        "Olymp",
        "Outhere",
    ];

    const brandsStartingWithP = [
        "Pakerson",
        "Pal Zileri",
        "Palm Angels",
        "Paloma Barcelo",
        "Pangaia",
        "Pantaloni Torino",
        "Paolo Pecora",
        "Parah",
        "Parajumpers",
        "Pas de Rouge",
        "Pashmere",
        "Pashmina",
        "Pasotti",
        "Patrizia Pepe",
        "Paul & Shark",
        "Pellettieri di Parma",
        "Peserico",
        "Peuterey",
        "Philipp Plein",
        "Philippe Model",
        "Pierre Cardin",
        "Pink Memories",
        "Pinko",
        "Piquadro",
        "Playboy",
        "Pokemaoke",
        "Polaroid",
        "Pollini",
        "Prada",
        "Premiata",
        "Proenza Schouler",
        "PRPS",
        "Puma",
    ];

    const brandsStartingWithR = [
        "Raf Simons",
        "Rag & Bone",
        "Raganella Princess",
        "Ralph Lauren",
        "RDNT",
        "Redemption",
        "Reebok",
        "Refrigiwear",
        "Regatta",
        "Rene Caovilla",
        "Rene Lezard",
        "Renzi",
        "Repo",
        "Rich & Royal",
        "Richard J. Brown",
        "Rip Curl",
        "Ritratti",
        "Roberto Botticelli",
        "Roberto Cavalli",
        "Roberto Morelli",
        "Roberto Serpentini",
        "Rocco Ragni",
        "Rochas",
        "Roidal",
        "Rose & Petal",
        "Roy Robson",
        "RoyalBag",
        "Rudsak",
    ];

    const brandsStartingWithS = [
        "Salvatore Ferragamo",
        "Samas",
        "Sandrine Rose",
        "Sara Burglar",
        "Sasha Fabiani",
        "Saucony",
        "Save The Duck",
        "Save the Queen",
        "Scabal",
        "Schneiders",
        "Seafolly",
        "Sebastian",
        "Serafini",
        "Sergio Levantesi",
        "Seventy",
        "Sfizio",
        "Silvian Heach",
        "Simone Perele",
        "Siviglia",
        "SLY 010",
        "Space",
        "Status",
        "Stefania Maiaroli",
        "Stella McCartney",
        "Stilnology",
        "Stokton",
        "Stone Island",
        "Stuart Weitzman",
        "Supreme Grip",
        "Supreme Spain",
    ];

    const brandsStartingWithT = [
        "The Attico",
        "The North Face",
        "Think Believe",
        "Tiding Bag",
        "Tines",
        "TODS",
        "Tombolini",
        "Tommy Hilfiger",
        "Tory Burch",
        "Tosca Blu",
        "Touche",
        "Trussardi",
        "Tumi",
        "TWINSET",
    ];

    const brandsStartingWithU = [
        "U.S. Polo Assn",
        "UGG Australia",
        "Under Armour",
        "Uniqlo",
        "Unravel Project",
        "UP TO BE",
    ];

    const brandsStartingWithV = [
        "Valentino",
        "Valvola",
        "VDP",
        "Versace",
        "Vetements",
        "Vic Matie",
        "Vicini",
        "Vittorio Virgili",
        "Vivienne Westwood",
        "Voile Blanche",
    ];

    const brandsStartingWithW = [
        "Wandering",
        "Wandler",
        "Wildfox",
        "Williams Wilson",
        "Wrangler",
    ];




    const [currentIndex, setCurrentIndex] = useState(0);
    const brandContainerRef = useRef(null);

    const handleLetterClick = (selectedLetter) => {
        if (selectedLetter) {
            const selectedBrandContainer = document.getElementById(`brands-starting-with-${selectedLetter}`);
            if (selectedBrandContainer) {
                selectedBrandContainer.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithDuplications.length);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [imagesWithDuplications.length, currentIndex]);

    return (
        <div>
            <div className={styles.imageContainer}>
                {imagesWithDuplications.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Brand ${index + 1}`}
                        style={{
                            transform: `translateX(-${currentIndex * 220}px)`
                        }}
                    />
                ))}
            </div>
            <div className="section">
                <div className={styles.introText}>
                    On the Cult Boutique website, you can buy branded items from the worlds leading designers. We represent more than 100 luxury brands that dictate fashion trends and pay special attention to quality. You choose the goods of your favorite brand, and we will deliver them to you at a convenient place and time.
                </div>
                <div className={styles.alphabetRow}>
                    {Array.from("ABCDEFGHIJKLMNOPRSTUVW").map((letter, index) => (
                        <button
                            key={index}
                            className={styles.alphabetLetter}
                            onClick={() => handleLetterClick(letter)}
                            style={{ cursor: "pointer" }}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
                <div className={styles.brandContainer} ref={brandContainerRef}>
                    <div id="brands-starting-with-A" className={styles.brandLetter}>A</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithA.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="B">
                    <div id="brands-starting-with-B" className={styles.brandLetter}>B</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithB.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="C">
                    <div id="brands-starting-with-C" className={styles.brandLetter}>C</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithC.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="D">
                    <div id="brands-starting-with-D" className={styles.brandLetter}>D</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithD.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="E">
                    <div id="brands-starting-with-E" className={styles.brandLetter}>E</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithE.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="F">
                    <div id="brands-starting-with-F" className={styles.brandLetter}>F</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithF.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="G">
                    <div id="brands-starting-with-G" className={styles.brandLetter}>G</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithG.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="H">
                    <div id="brands-starting-with-H" className={styles.brandLetter}>H</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithH.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="I">
                    <div id="brands-starting-with-I" className={styles.brandLetter}>I</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithI.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div><div className={styles.brandContainer} data-letter="J">
                    <div id="brands-starting-with-J" className={styles.brandLetter}>J</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithJ.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div><div className={styles.brandContainer} data-letter="K">
                    <div id="brands-starting-with-K" className={styles.brandLetter}>K</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithK.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div><div className={styles.brandContainer} data-letter="L">
                    <div id="brands-starting-with-L" className={styles.brandLetter}>L</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithL.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="M">
                    <div id="brands-starting-with-M" className={styles.brandLetter}>M</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithM.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="N">
                    <div id="brands-starting-with-N" className={styles.brandLetter}>N</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithN.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="O">
                    <div id="brands-starting-with-O" className={styles.brandLetter}>O</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithO.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="P">
                    <div id="brands-starting-with-P" className={styles.brandLetter}>P</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithP.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="R">
                    <div id="brands-starting-with-R" className={styles.brandLetter}>R</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithR.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="S">
                    <div id="brands-starting-with-S" className={styles.brandLetter}>S</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithS.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="T">
                    <div id="brands-starting-with-T" className={styles.brandLetter}>T</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithT.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="U">
                    <div id="brands-starting-with-U" className={styles.brandLetter}>U</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithU.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="V">
                    <div id="brands-starting-with-V" className={styles.brandLetter}>V</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithV.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.brandContainer} data-letter="W">
                    <div id="brands-starting-with-W" className={styles.brandLetter}>W</div>
                    <ul className={styles.brandNames}>
                        {brandsStartingWithW.map((brand, index) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Brands;