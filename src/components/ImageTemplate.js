export default function ImageTemplate(props){
    const {name, img, classN} = props;
    return (<>
    <div className={classN}>
        <img alt="templae" src={img}/>
        <div className="imgdiv"><h1>{name}</h1></div>
    </div>
    </>)
}