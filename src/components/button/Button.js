


export default function Button(props) {
    return (
        <div className="space-x-1">
                <button style={props.style} className="bg-purple-600 flex justify-start px-4 py-3  text-white rounded-2xl text-lg" ><img className="pt-2 pb-1" src={props.src}  /><span className="text-xl pl-1 mt-1"> {props.title}</span></button>
        </div>
    )
}