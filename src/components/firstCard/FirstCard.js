
export default function FirstCard(props){
    return(
        
       <div className='bg-blend-normal'>
        <img className='h-64 w-fit rounded-3xl' src={props.cardimg} alt="pic" />
        <h1 className='text-white text-2xl ml-3'>Space Walking</h1>
        <div className="flex"><img className=' mb-5 mt-3 ml-3' src={props.src} alt="pic" /><p className="text-white pt-3 pl-3 text-sm">{props.title}</p></div>
       </div>
       
    )
}