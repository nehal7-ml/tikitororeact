
import React,{useState} from "react";
import './ContentContainer.css'
import ImageConatainer from "./ImageConatiner";

type content = {
    heading: string,
    text: string,
}
type ContentConatainerProps={
    imgRight:boolean,
    imgsrc:string,
    content: content,
}

class MultiLineText extends React.Component <content> {
    constructor(props:content) {
        super(props);
         

    }
    render():React.ReactNode {
        let lines :string[] =this.props.text.split('\n');
        const lineItems = lines.map((line) =>
        <p>{line}</p>
        );
       return ( 
        <div className="TextContent">
            <h2>{this.props.heading}</h2>
            <div style={{textAlign: 'start', position: 'absolute',top: '30%', right:'5%'}}>
                {lineItems}
            </div>            
        </div>
       );      
    }
  }
  

class ContentConatainer extends React.Component <ContentConatainerProps> {
              

    render(): React.ReactNode {
        return(
            <div className="Content" style={{flexDirection: this.props.imgRight ? "row-reverse":"row"}}>                    
                <ImageConatainer imgsrc={this.props.imgsrc} />
                <MultiLineText 
                    heading={this.props.content.heading} 
                    text ={this.props.content.text} />              
            </div>            
        )
    }
}
export default ContentConatainer;