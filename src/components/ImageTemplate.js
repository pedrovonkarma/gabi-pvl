export default function ImageTemplate(props){
    const {name, img, classN} = props;
    let peble = false;
    if (classN==="imageContainer2") {
        peble = true;
    }
    return (<>
    <div className={classN}>
        <img alt="templae" src={img}/>
        <div className={peble ? "imgdiv4" : "imgdiv"}><h1>{name}</h1></div>
    </div>
    </>)
}