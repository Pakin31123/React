const items =[
    {
      title :"cat1",
      thumbnaiUrl :"/Picture/1.jpg"
      
    
    },
    {
      title :"cat2",
      thumbnaiUrl :"/Picture/2.jpg"
      
    
    },
    {
      title :"boy1",
      thumbnaiUrl :"/Picture/3.jpg"
      
    
    },
    {
      title :"girl2",
      thumbnaiUrl :"/Picture/4.jpg"
      
    
    }
  ];
  export default items;

function Item(props){
  const {item1} = props;
    return(
        <div className="item">
        <img src={item1.thumbnaiUrl}/>
        <h4>{item1.title}</h4>
      </div>
    );
    
}