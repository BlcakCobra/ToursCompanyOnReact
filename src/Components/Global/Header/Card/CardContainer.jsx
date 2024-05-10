import CardRow from "./CardRow";
export default function CardContainer(props) {

    return (
      <div className="col">
        <CardRow cards={props.cardsData.slice(0, 2)} />
        <CardRow cards={props.cardsData.slice(2, 4)} />
      </div>
    );
  }