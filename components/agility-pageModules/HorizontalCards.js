import React from "react"

const HorizontalCards = ({module}) => {
    const {fields} = module;
    const Card = ({iconUrl, title, text, iconBg}) => {
        console.log(title, iconUrl)
        return(
            <div className={"border-2 border-agility w-72 h-32 card py-4 px-8 space-y-3 rounded-2xl"}>
                {iconUrl ?
                    <img className={"rounded"} src={iconUrl} height={"48"} width={"48"} style={{backgroundColor: iconBg}} />
                    : ''}
                <p className={"c1"}>{title}</p>
                <p className={"b3 text-justify"}>{text}</p>
            </div>
        )
    }
    if (fields.cards == null) return (null)
    return(
        <div className={"flex flex-col justify-center space-y-5 py-14"}>
            <div className={"flex justify-center"}>
                <h3>{fields.title}</h3>
            </div>

            <div className={"flex justify-center space-x-6"}>
                {fields.cards.slice(0).reverse().map((card, index) => {
                        return(
                            <Card key={card.contentID.toString()}
                                  title={card.fields.title}
                                  text={card.fields.text}
                                  iconUrl={card.fields.icon ? card.fields.icon.url : ''}
                                  iconBg={card.fields.iconBackground}
                            />
                        )
                })
                }
            </div>
        </div>

    );

}
export default HorizontalCards