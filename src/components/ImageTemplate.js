export default function ImageTemplate(props){
    const {name, img} = props;
    return (<>
    <div className="imageContainer">
        <img alt="templae" src={img}/>
        <div className="imgdiv"><h1>{name}</h1></div>
    </div>
    </>)
}