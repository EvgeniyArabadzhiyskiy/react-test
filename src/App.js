import Section from "./components/Section";
import PaintingList from "./components/PaintingList";
import paintings from "./components/paintings.json";

// const markup  = paintings.map(painting => {
//     return <Painting
//             key={painting.id}
//             imageUrl={painting.url}
//             title={painting.title}
//             authorTag={painting.author.tag}
//             authorUrl={painting.author.url}
//             quantity={painting.quantity}
//             price={painting.price}
//             />
// })

export default function App(props) {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="The Best" />
    </div>
  );
}
