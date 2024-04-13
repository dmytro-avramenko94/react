import { CollectionAPI } from "../../data/collection"

function createCollectionCard() {
    return (
        <div className="collection__row">
            {
                CollectionAPI.map(item => (
                    <div className="collection__card">
                        <img src={item.image} alt="" className="collection__image" />
                        <h4 className="collection__name">{item.name}</h4>
                        <p className="collection__availability">{item.availability}</p>
                    </div>
                ))
            }
        </div>
    )
}

console.log(CollectionAPI);

export default function Collection() {
    return (
        <section className="collection">
            <div className="collection__container container">
                {createCollectionCard()}
            </div>
        </section>
    )
}