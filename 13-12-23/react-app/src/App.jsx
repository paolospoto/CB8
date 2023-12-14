import CardList from "./components/cardList/CardList";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/200/400?7",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/200/400?8",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?9",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 11,
      img: "https://picsum.photos/200/400?11",
      title: "Image card",
    },
    {
      id: 12,
      img: "https://picsum.photos/200/400?12",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/200/400?17",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/200/400?18",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?19",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?20",
      title: "Image card",
    },
    {
      id: 11,
      img: "https://picsum.photos/200/400?58",
      title: "Image card",
    },
    {
      id: 12,
      img: "https://picsum.photos/200/400?22",
      title: "Image card",
    },
  ];

  const imagesList3 = [
    {
      id: 1,
      img: "https://picsum.photos/300/300?60",
      title: "Image Gallery",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300?61",
      title: "Image Gallery",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300?62",
      title: "Image Gallery",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/300?63",
      title: "Image Gallery",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/300?64",
      title: "Image Gallery",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/300?65",
      title: "Image Gallery",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/300?66",
      title: "Image Gallery",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/300?67",
      title: "Image Gallery",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <Gallery items={imagesList3} />
      <Footer />
    </div>
  );
}

export default App;
